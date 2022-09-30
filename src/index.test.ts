import * as mbstring from "./";

/**
 * @function mbstring.ucFirst
 */

test("should return strings with first character uppercase", () => {
  expect(mbstring.ucFirst("peniel")).toEqual("Peniel");
});
