const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, './src/app/localization/locales/en.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

function buildPaths(obj, prefix = '') {
  const result = {};
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      result[key] = buildPaths(obj[key], fullKey);
    } else {
      result[key] = fullKey;
    }
  }
  return result;
}

const content = `
// AUTO-GENERATED – do not edit manually
import en from '../public/locales/en/translation.json';

type Join<K extends string, P extends string> =
  P extends '' ? K : \`\${P}.\${K}\`;

type KeyPaths<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends Record<string, any>
    ? KeyPaths<T[K], Join<K, Prefix>>
    : Join<K, Prefix>;
};

export const Keys = ${JSON.stringify(buildPaths(en), null, 2)} as const satisfies KeyPaths<typeof en>;
`;

fs.writeFileSync(path.join(__dirname, './src/keys.ts'), content.trim());
