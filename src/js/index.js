import "@scss/style.scss";
import "./modules/keyboard";
import { makeButtonPressed, makeButtonUnpressed, makeKeyboardButtonPressed, makeKeyboardButtonUnpressed, printSymbol, printVirtualSymbol } from "./modules/keyboard";

const keys = document.querySelectorAll(".key");

document.documentElement.addEventListener("keydown", printSymbol);
document.documentElement.addEventListener('keydown', makeKeyboardButtonPressed)
document.documentElement.addEventListener("keyup", makeKeyboardButtonUnpressed);``

keys.forEach((key) => {
  key.addEventListener("click", printVirtualSymbol);
  key.addEventListener("mousedown", makeButtonPressed);
  key.addEventListener("mouseup", makeButtonUnpressed);
});
