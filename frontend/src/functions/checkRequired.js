const checkRequired = (inputArray) => {
  inputArray.forEach((element) => {
    const parent = element.parentElement;
    const small = parent.querySelector("small");
    if (element.value.trim().length === 0) {
      small.innerText = "Required field!";
    } else {
      small.innerText = "";
    }
  });

  return true;
};

module.exports = checkRequired;
