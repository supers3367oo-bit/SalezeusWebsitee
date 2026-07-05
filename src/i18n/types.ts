export type Locale = 'en' | 'ar'

export type TranslationTree = {
  [key: string]: string | TranslationTree
}
