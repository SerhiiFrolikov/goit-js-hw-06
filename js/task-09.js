function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const btnChangeColor = document.querySelector('button.change-color');
const valueChangeColor = document.querySelector('span.color');

const changeColor = () => {
  valueChangeColor.textContent = bodyColor.style.backgroundColor = getRandomHexColor();
}
btnChangeColor.addEventListener('click', changeColor);
