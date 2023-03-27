const controlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const fontSizeControl = ({ currentTarget }) =>
  (textEl.style.fontSize = `${currentTarget.value}px`);

controlEl.addEventListener("input", fontSizeControl);