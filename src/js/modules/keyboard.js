const keyboardKeys = getKeyboardKeys();
const textarea = document.querySelector(".textarea");
const options = ["AltLeft", "AltRight", "Backspace", "CapsLock", "ControlLeft", "ControlRight", "Delete", "Enter", "ShiftLeft", "ShiftRight", "Tab", "MetaLeft"];
const isTextareaFocused = document.activeElement.closest("textarea");

export function printVirtualSymbol(event) {
  const currentKey = event.currentTarget.className.split(" ")[2];

  if (currentKey === "Backspace") {
    deletePrevSymbol();
    return;
  }

  if (keyboardKeys.includes(currentKey) && !options.includes(currentKey)) {
    if (event.currentTarget.classList.contains("Space")) {
      printValue(" ");
      return;
    }

    printValue(event.target.innerText);
    event.preventDefault();
  }
}

export function getKeyboardKeys() {
  const activeKeys = document.querySelectorAll(".keyboard__key");
  const activeButtons = Array.from(activeKeys).map((key) => key.className.split(" ")[2]);
  return activeButtons;
}

export function printSymbol(event) {
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
      printValue(event.key);
      return;
    }

    if (Object.keys(exclusion).includes(event.code)) {
      printValue(exclusion[event.code]);
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
  if(isTextareaFocused) {
  
    console.log();
  
    textarea.value = currentValue.slice(0, startPos - 1) + currentValue.slice(endPos);
    textarea.selectionStart = startPos - 1;
    textarea.selectionEnd = endPos - 1;
    return;
  }
  
}

function printValue(value) {
  const currentValue = textarea.value;
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;

  textarea.value = currentValue.slice(0, startPos) + value + currentValue.slice(endPos);
  textarea.selectionStart = startPos + 1;
  textarea.selectionEnd = endPos + 1;
}
