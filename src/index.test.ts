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
