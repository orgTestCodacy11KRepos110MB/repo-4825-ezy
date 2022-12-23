import { AlignmentValue, LanguageValue, MenuOptionsValue, ThemeValue } from './settings.interface';

export function isAlignmentValue(value: any): value is AlignmentValue {
  return value?.alignment !== undefined;
}

export function isLanguageValue(value: any): value is LanguageValue {
  return value?.language !== undefined;
}

export function isMenuOptionsValue(value: any): value is MenuOptionsValue {
  return value?.collapsed !== undefined;
}

export function isThemeValue(value: any): value is ThemeValue {
  return value?.theme !== undefined;
}
