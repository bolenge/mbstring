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
