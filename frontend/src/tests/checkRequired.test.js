const checkRequired = require("../functions/checkRequired");

test("Checking required fields", () => {
  const returnValue = checkRequired([]);
  expect(returnValue).toBe(true);
});
