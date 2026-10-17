/**
 * Reads Sentry settings from an env file (default: .env.production) and writes:
 * - sentry.options.json (runtime / Metro / native early init)
 * - android/sentry.properties & ios/sentry.properties (source map upload via auth.token)
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const envFile = process.env.ENV_FILE || '.env.production';
const envPath = path.join(root, envFile);

function parseEnvFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const vars = {};

  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const eq = trimmed.indexOf('=');
    if (eq === -1) {
      continue;
    }

    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    vars[key] = value;
  }

  return vars;
}

function pick(vars, ...keys) {
  for (const key of keys) {
    if (vars[key]) {
      return vars[key];
    }
  }

  return undefined;
}

function writeProperties(filePath, entries) {
  const lines = Object.entries(entries)
    .filter(([, value]) => value != null && value !== '')
    .map(([key, value]) => `${key}=${value}`);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`);
}

function main() {
  if (!fs.existsSync(envPath)) {
    console.log(`[sentry:sync] Skip: ${envFile} not found`);
    return;
  }

  const vars = parseEnvFile(envPath);

  const authToken = pick(vars, 'auth.token', 'SENTRY_AUTH_TOKEN');
  const dsn = pick(vars, 'SENTRY_DSN', 'dsn');
  const org = pick(vars, 'defaults.org', 'SENTRY_ORG');
  const project = pick(vars, 'defaults.project', 'SENTRY_PROJECT');
  const url = pick(vars, 'defaults.url', 'SENTRY_URL');
  const environment = pick(vars, 'SENTRY_ENVIRONMENT', 'APP_ENV') || 'production';
  const tracesSampleRateRaw = pick(vars, 'SENTRY_TRACES_SAMPLE_RATE', 'tracesSampleRate');
  const tracesSampleRate = tracesSampleRateRaw ? Number(tracesSampleRateRaw) : 0.2;

  if (!dsn) {
    console.warn(`[sentry:sync] SENTRY_DSN is missing in ${envFile}`);
  }

  if (!authToken) {
    console.warn(
      `[sentry:sync] auth.token is missing in ${envFile} (native source map upload may fail)`
    );
  }

  const options = {
    dsn,
    environment,
    tracesSampleRate: Number.isFinite(tracesSampleRate) ? tracesSampleRate : 0.2,
    enableAutoSessionTracking: true
  };

  fs.writeFileSync(path.join(root, 'sentry.options.json'), `${JSON.stringify(options, null, 2)}\n`);

  const properties = {
    'auth.token': authToken,
    'defaults.org': org,
    'defaults.project': project,
    'defaults.url': url
  };

  writeProperties(path.join(root, 'android', 'sentry.properties'), properties);
  writeProperties(path.join(root, 'ios', 'sentry.properties'), properties);

  console.log(`[sentry:sync] Synced from ${envFile}`);
}

main();
