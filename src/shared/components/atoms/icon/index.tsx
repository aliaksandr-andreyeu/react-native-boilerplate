import createIconSet from '@react-native-vector-icons/icomoon';
import icoMoonConfig from '@assets/fonts/icomoon/selection.json';

export enum BaseIconSize {
  xxs = 8,
  xs = 12,
  sm = 16,
  md = 20,
  lg = 24,
  xl = 28,
  xxl = 32
}

export enum BaseIconName {
  Plus = 'plus',
  Search = 'search',
  User = 'user',
  Close = 'close',
  Gear = 'gear',
  Home = 'home',
  Font = 'font',
  PlusCircle = 'plus-circle',
  Calendar = 'calendar',
  Gears = 'gears',
  Comments = 'comments',
  SignOut = 'sign-out',
  SignIn = 'sign-in',
  Globe = 'globe',
  Users = 'users',
  Bars = 'bars',
  PlusSquare = 'plus-square',
  SunO = 'sun-o',
  MoonO = 'moon-o',
  PlusSquareO = 'plus-square-o',
  Sliders = 'sliders',
  CalendarPlusO = 'calendar-plus-o'
}

export const BaseIcon = createIconSet(icoMoonConfig);
