const clearForm = require("../functions/clearForm");

test("Clearing restaurant form", () => {
  const returnValue = clearForm([]);
  expect(returnValue).toBe(true);
});
