import * as mbstring from "./";

/**
 * @function mbstring.ucFirst
 */

test("should return strings with first character uppercase", () => {
  expect(mbstring.ucFirst("peniel")).toEqual("Peniel");
});

/**
 * @function mbstring.after
 */

test("should return everything after the given value in a string.", () => {
  expect(mbstring.after("This is my name", "This is")).toEqual(" my name");
});

/**
 * @function mbstring.afterLast
 */

test("should return everything after the last occurrence of the given value in a string.", () => {
  expect(mbstring.afterLast("My name is wifi, your name is bil", "is")).toEqual(
    " bil"
  );
});

/**
 * @function mbstring.before
 */

test("should return everything before the given value in a string.", () => {
  expect(mbstring.before("This is my name", "my name")).toEqual("This is ");
});

/**
 * @function mbstring.beforeLast
 */

test("should return everything before the last occurrence of the given value in a string.", () => {
  expect(mbstring.beforeLast("This is my name", "is")).toEqual("This ");
});

/**
 * @function mbstring.between
 */

test("should return the portion of a string between two given values", () => {
  expect(mbstring.between("This is my name", "This", "name")).toEqual(
    " is my "
  );
});

/**
 * @function mbstring.betweenFirst
 */

test("should return the smallest possible portion of a string between two given values", () => {
  expect(mbstring.betweenFirst("[a] bc [d]", "[", "]")).toEqual("a");
});

/**
 * @function mbstring.camel
 */

 test("should return converts the given string to camelCase.", () => {
  expect(mbstring.camel("foo_bar")).toEqual("fooBar");
});

/**
 * @function mbstring.snake
 */

 test("should return converts the given string to snake_case.", () => {
  expect(mbstring.snake("fooBar")).toEqual("foo_bar");
  expect(mbstring.snake("fooBar", "-")).toEqual("foo-bar");
});

/**
 * @function mbstring.kebab
 */

 test("should return converts the given string to snake_case.", () => {
  expect(mbstring.kebab("fooBar")).toEqual("foo-bar");
});

/**
 * @function mbstring.contains
 */

 test("should determines if the given string contains the given value", () => {
  expect(mbstring.contains("This is my name", "my")).toEqual(true);
});

/**
 * @function mbstring.containsAll
 */

 test("should determines if the given string contains all of the values in a given array", () => {
  expect(mbstring.containsAll("This is my name", ["my", "name"])).toEqual(true);
});

/**
 * @function mbstring.endsWith
 */

test("should determines if the given string ends with the given value", () => {
  expect(mbstring.endsWith("This is my name", "name")).toEqual(true);
});

/**
 * @function mbstring.isJson
 */

 test("should determine if a given string is valid JSON", () => {
  expect(
    mbstring.isJson('{"name":"DIALUNDAMA", "firstName":"Peniel"}')
  ).toEqual(true);
  expect(mbstring.isJson('{name:"DIALUNDAMA", "firstName":"Peniel"}')).toEqual(
    false
  );
});

/**
 * @function mbstring.length
 */

 test("should  return the length of the given string", () => {
  expect(mbstring.length("Peniel DIALUNDAMA")).toEqual(17);
});

/**
 * @function mbstring.limit
 */

 test("should  limit the number of characters in a string", () => {
  expect(mbstring.limit("Peniel DIALUNDAMA", 12)).toEqual("Peniel DIALU...");
});