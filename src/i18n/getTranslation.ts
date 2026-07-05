import type { TranslationTree } from './types'

export function getTranslation(tree: TranslationTree, key: string): string {
  const parts = key.split('.')
  let current: string | TranslationTree = tree

  for (const part of parts) {
    if (typeof current !== 'object' || current === null || !(part in current)) {
      return key
    }
    current = current[part]
  }

  return typeof current === 'string' ? current : key
}
