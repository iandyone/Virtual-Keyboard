const keyboardKeys = getKeyboardKeys();
const textarea = document.querySelector(".textarea");
const options = ["AltLeft", "AltRight", "Backspace", "CapsLock", "ControlLeft", "ControlRight", "Delete", "Enter", "ShiftLeft", "ShiftRight", "Tab", "MetaLeft"];
const isTextareaFocused = textarea === document.activeElement;
const textareaValue = [];

textarea.value = textareaValue;

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
    event.preventDefault();
  }
}

export function getKeyboardKeys() {
  const activeKeys = document.querySelectorAll(".keyboard__key");
  const activeButtons = Array.from(activeKeys).map((key) => key.className.split(" ")[2]);
  return activeButtons;
}

export function printSymbol(event) {
  // console.log(event.code);
  // document.querySelector(`.${event.code}`).classList.add('pressed');

  if (!isTextareaFocused) {
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

    // event.preventDefault();
  }
}

export function makeButtonPressed(event) {
  event.currentTarget.classList.add("pressed");
}

export function makeButtonUnpressed(event) {
  event.currentTarget.classList.remove("pressed");
}

export function makeKeyboardButtonPressed(event) {
  const key = document.querySelector(`.${event.code}`);
  if (key) {
    key.classList.add("pressed");
  }
}

export function makeKeyboardButtonUnpressed(event) {
  const key = document.querySelector(`.${event.code}`);
  if (key) {
    key.classList.remove("pressed");
  }
}
/* ============== */

function deletePrevSymbol() {
  const textareaCurrentValue = textarea.value.split("");
  textareaCurrentValue.pop();
  textarea.value = textareaCurrentValue.join("");
  return;
}
