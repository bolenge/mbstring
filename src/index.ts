/**
 * Allow to capitalize the first character of string param
 * @param {string} str
 * @returns string
 */
export const ucFirst = (str: string) : string => {
  return str[0].toUpperCase() + str.substring(1)
}

/**
 * Return the remainder of a string after the first occurrence of a given value.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {string}
 */
 export const after = (subject: string, search: string): string => {
  if (search === "") return subject;
  return subject.indexOf(search) !== -1
    ? subject.substring(subject.indexOf(search) + search.length)
    : subject;
};