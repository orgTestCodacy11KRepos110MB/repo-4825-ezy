import { Alignment, Language, Menu, Theme } from '@database/types';

export interface Settings {
  theme: Theme;
  language: Language;
  alignment: Alignment;
  menu: Menu;
}

export interface SettingsStorage extends Settings {
  fetch: () => Promise<void>;
  setTheme: (theme: Theme) => Promise<void>;
  setAlignment: (alignment: Alignment) => void;
  setMenu: (menu: Menu) => void;
}
