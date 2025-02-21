import mapColors from './color-map.json'

export const mapLangColor = (lang: string | null) => {
  if (lang) {
    return mapColors[lang as keyof typeof mapColors]
  }
  return
}
