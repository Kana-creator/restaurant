const clearForm = (inputArray) => {
  inputArray.forEach((element) => {
    element.value = null;
  });
};

module.exports = clearForm;
