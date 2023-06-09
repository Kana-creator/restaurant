const clearForm = (inputArray) => {
  inputArray.forEach((element) => {
    element.value = null;
  });

  return true;
};

module.exports = clearForm;
