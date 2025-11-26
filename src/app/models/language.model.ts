export interface Language {
  name: string;
  languageCode: string;
}

export const LANGUAGE_CONFIG: Language[] = [
  {
    name: 'English',
    languageCode: 'en',
  },
  {
    name: '日本語',
    languageCode: 'ja'
  },
  // {
  //   name: 'French - Français',
  //   languageCode: 'fr',
  // },
  // {
  //   name: 'Spanish - Español',
  //   languageCode: 'es',
  // },
];
