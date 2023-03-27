const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor() {
  const inputDataLength = Number(validationInput.dataset.length);
  const inputValueLength = Number(validationInput.value.trim().length);

  if (inputValueLength === inputDataLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
};