// AUTO-GENERATED – do not edit manually
import en from '../public/locales/en/translation.json';

type Join<K extends string, P extends string> = P extends '' ? K : `${P}.${K}`;

type KeyPaths<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends Record<string, any> ? KeyPaths<T[K], Join<K, Prefix>> : Join<K, Prefix>;
};

export const Keys = {
  navigation: {
    tabs: {
      dashboard: 'navigation.tabs.dashboard',
      events: 'navigation.tabs.events',
      communities: 'navigation.tabs.communities',
      search: 'navigation.tabs.search',
      profile: 'navigation.tabs.profile'
    }
  },
  common: {
    continue: 'common.continue'
  },
  screens: {
    dashboard: {
      title: 'screens.dashboard.title'
    },
    events: {
      title: 'screens.events.title'
    },
    communities: {
      title: 'screens.communities.title'
    },
    search: {
      title: 'screens.search.title'
    },
    profile: {
      title: 'screens.profile.title'
    },
    auth: {
      'agree-tc-privacy': 'screens.auth.agree-tc-privacy',
      'confirm-password': 'screens.auth.confirm-password',
      'email-address': 'screens.auth.email-address',
      'forgot-password': 'screens.auth.forgot-password',
      'have-account': 'screens.auth.have-account',
      login: 'screens.auth.login',
      'new-password': 'screens.auth.new-password',
      'one-time-password': 'screens.auth.one-time-password',
      or: 'screens.auth.or',
      password: 'screens.auth.password',
      register: 'screens.auth.register',
      'skip-registration': 'screens.auth.skip-registration',
      username: 'screens.auth.username',
      with: 'screens.auth.with',
      'with-email': 'screens.auth.with-email'
    },
    'choose-language': {
      title: 'screens.choose-language.title'
    },
    menu: {
      'my-profile': 'screens.menu.my-profile',
      events: 'screens.menu.events',
      'create-event': 'screens.menu.create-event',
      communities: 'screens.menu.communities',
      'ideas-feedback': 'screens.menu.ideas-feedback',
      'privacy-policy': 'screens.menu.privacy-policy',
      'log-out': 'screens.menu.log-out',
      'sign-in': 'screens.menu.sign-in',
      register: 'screens.menu.register'
    }
  },
  errors: {
    'ooops-something-went-wrong': 'errors.ooops-something-went-wrong',
    'whatever-happened-it-was-our-fault': 'errors.whatever-happened-it-was-our-fault',
    'try-again': 'errors.try-again'
  }
} as const satisfies KeyPaths<typeof en>;
