export function mask(value: string, pattern: string) {
  let i = 0
  value = value.toString()

  return pattern.replace(/#/g, () => value[i++] || '')
}
