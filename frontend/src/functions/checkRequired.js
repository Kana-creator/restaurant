const checkRequired = (inputArray) => {
  inputArray.forEach((element) => {
    const parent = element.parentElement;
    const small = parent.querySelector("small");
    element.value.trim().length === 0
      ? (small.innerText = "Required field!")
      : (small.innerText = "");
  });
};

module.exports = checkRequired;
