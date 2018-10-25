export const RANDOM_STRING_DEFAULTS = {
  length: 16,
  charset: "abcdefghijklmnopqrstuvwxyz1234567890"
}
export function randomString(
  length = RANDOM_STRING_DEFAULTS.length,
  charset = RANDOM_STRING_DEFAULTS.charset
) {
  let str = ""
  const charsetLen = charset.length
  while (length-- > 0) str += charset[Math.random()*charsetLen | 0]
  return str
}
