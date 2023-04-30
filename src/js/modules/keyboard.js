const keyboardKeys = getKeyboardKeys();
const textarea = document.querySelector(".textarea");
const options = ["AltLeft", "AltRight", "Backspace", "CapsLock", "ControlLeft", "ControlRight", "Delete", "Enter", "ShiftLeft", "ShiftRight", "Tab", "MetaLeft"];

export function printVirtualSymbol(event) {
  const currentKey = event.currentTarget.className.split(" ")[2];

  if (currentKey === "Backspace") {
    deletePrevSymbol();
    return;
  }

  if (keyboardKeys.includes(currentKey) && !options.includes(currentKey)) {
    if (event.currentTarget.classList.contains("Space")) {
      textarea.value += " ";
      return;
    }

    textarea.value += event.target.innerText;
  }
}

export function getKeyboardKeys() {
  const activeKeys = document.querySelectorAll(".keyboard__key");
  const activeButtons = Array.from(activeKeys).map((key) => key.className.split(" ")[2]);
  return activeButtons;
}

export function printSymbol(event) {
  const exclusion = {
    ArrowUp: "▲",
    ArrowDown: "▼",
    ArrowLeft: "◄",
    ArrowRight: "►",
  };

  if (event.key === "Backspace") {
    deletePrevSymbol();
    return;
  }

  if (keyboardKeys.includes(event.code) && !options.includes(event.code) && !Object.keys(exclusion).includes(event.code)) {
    textarea.value += event.key;
    return;
  }

  if (Object.keys(exclusion).includes(event.code)) {
    textarea.value += exclusion[event.code];
    return;
  }

  event.preventDefault();
}

/* ============== */

function deletePrevSymbol() {
  const textareaValue = textarea.value.split("");
  textareaValue.pop();
  textarea.value = textareaValue.join("");
  return;
}
