/**
 * Allow to capitalize the first character of string param
 * @param {string} str
 * @returns string
 */
export const ucFirst = (str: string): string => {
  return str[0].toUpperCase() + str.substring(1);
};

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

/**
 * Return the remainder of a string after the last occurrence of a given value.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {string}
 */
export const afterLast = (subject: string, search: string): string => {
  return search === "" ? subject : subject.split(search).reverse()[0];
};

/**
 * Get the portion of a string before the first occurrence of a given value.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {string}
 */
export const before = (subject: string, search: string): string => {
  return search === "" ? subject : subject.split(search)[0];
};

/**
 * Get the portion of a string before the last occurrence of a given value.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {string}
 */

export const beforeLast = (subject: string, search: string): string => {
  return search === ""
    ? subject
    : subject.substring(0, subject.lastIndexOf(search));
};

/**
 * Get the portion of a string between two given values.
 *
 * @param  {string}  subject
 * @param  {string}  from
 * @param  {string}  to
 * @returns {string}
 */
export const between = (subject: string, from: string, to: string): string => {
  if (from === "" || to === "") return subject;
  return beforeLast(after(subject, from), to);
};

/**
 * Get the smallest possible portion of a string between two given values.
 *
 * @param  {string}  subject
 * @param  {string}  from
 * @param  {string}  to
 * @returns {string}
 */

export const betweenFirst = (
  subject: string,
  from: string,
  to: string
): string => {
  if (from === "" || to === "") return subject;
  return before(after(subject, from), to);
};

/**
 * Convert a value to camel case.
 *
 * @param  {string}  value
 * @returns {string}
 */

export const camel = (value: string, search: string): string => {
  return (" " + value)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
      return chr.toUpperCase();
    });
};

/**
 * Convert a string to snake case.
 *
 * @param  {string}  value
 * @param  {string}  delimiter
 * @returns {string}
 */

 export const snake = (value: string, delimiter: string = "_"): string => {
  const found =
    value.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    ) || [];
  return found.map((x) => x.toLowerCase()).join(delimiter);
};

/**
 * Convert a string to kebab case.
 *
 * @param  {string}  $value
 * @returns {string}
 */

 export const kebab = (value: string, search: string): string => {
  return snake(value, "-");
};

/**
 * Determine if a given string contains a given substring.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @param  {bool}  ignoreCase
 * @returns {bool}
 */

export const contains = (
  subject: string,
  search: string,
  ignoreCase: boolean = false
): boolean => {
  if (ignoreCase) return subject.toLowerCase().includes(search.toLowerCase());
  return subject.includes(search);
};

/**
 * Determine if a given string contains all array values.
 *
 * @param  {string}  subject
 * @param  {array}  words
 * @param  {bool}  ignoreCase
 * @returns {bool}
 */

export const containsAll = (
  subject: string,
  words: Array<string>,
  ignoreCase: boolean = false
): boolean => {
  return !words.find((str) => {
    if (ignoreCase) return subject.toLowerCase().includes(str.toLowerCase());
    return !subject.includes(str);
  });
};

/**
 * Determine if a given string ends with a given substring.
 *
 * @param  {string}  subject
 * @param  {string}  search
 * @returns {bool}
 */

export const endsWith = (subject: string, search: string): boolean => {
  return subject.endsWith(search);
};

/**
 * Determine if a given string is valid JSON.
 *
 * @param  {string}  value
 * @returns {bool}
 */

export const isJson = (value: string): boolean => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
};

/**
 * Return the length of the given {string}.
 *
 * @param  {string}  value
 * @returns {int}
 */

export const length = (value: string): number => {
  return value.length;
};

/**
 * Limit the number of characters in a string.
 *
 * @param  {string}  value
 * @param  {int}  limit
 * @param  {string}  end
 * @returns {string}
 */

export const limit = (
  value: string,
  limit: number,
  end: string = "..."
): string => {
  if (value.length < limit) return value;
  return `${value.substring(0, limit)}${end}`;
};

/**
 * Convert the given string to lower-case.
 *
 * @param  {string}  value
 * @returns {string}
 */

export const lower = (value: string): string => {
  return value.toLowerCase();
};

/**
 * Convert the given string to upper-case.
 *
 * @param  {string}  value
 * @returns {string}
 */

export const upper = (value: string): string => {
  return value.toUpperCase();
};

/**
 * Generate a more truly "random" alpha-numeric string.
 *
 * @param  {int}  length
 * @returns {string}
 */

export const random = (length: number): string => {
  return Math.round(
    Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
  )
    .toString(36)
    .slice(1);
};

/**
 * Wrap the string with the given strings.
 *
 * @param  {string}  before
 * @param  {string}  after
 * @returns {string}
 */
 export const wrap = (
  value: string,
  before: string,
  after: string = ""
): string => {
  return `${before}${value}${after || before}`;
};
