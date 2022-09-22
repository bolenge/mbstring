/**
 * Allow to capitalize the first character of string param
 * @param {string} str
 * @returns string
 */
export const ucFirst = (str: string) : string => {
  return str[0].toUpperCase() + str.substring(1)
}