import "@scss/style.scss";
import "./modules/keyboard";
import { printSymbol, printVirtualSymbol } from "./modules/keyboard";

const keys = document.querySelectorAll(".key");

document.documentElement.addEventListener("keydown", printSymbol);
keys.forEach((key) => key.addEventListener("click", printVirtualSymbol));
