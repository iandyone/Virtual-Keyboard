const keyboardKeys = getKeyboardKeys();
const textarea = document.querySelector(".textarea");
const options = ["AltLeft", "AltRight", "Backspace", "CapsLock", "ControlLeft", "ControlRight", "Delete", "Enter", "ShiftLeft", "ShiftRight", "Tab", "MetaLeft"];
const isTextareaFocused = document.activeElement.closest("textarea");
let CAPS = false;

export function printVirtualSymbol(event) {
  const currentKey = event.currentTarget.className.split(" ")[2];
  console.log(currentKey);

  if (currentKey === "Backspace" || currentKey === "Delete") {
    deleteSymbol(currentKey);
    return;
  }

  if (currentKey === "Tab") {
    printValue("\t");
    return;
  }

  if (currentKey === "CapsLock") {
    setCaps(event);
    return;
  }

  if (keyboardKeys.includes(currentKey) && !options.includes(currentKey)) {
    if (event.currentTarget.classList.contains("Space")) {
      printValue(" ");
      return;
    }

    const startPos = textarea.selectionStart;
    printValue(event.target.innerText);
    textarea.selectionStart = startPos + 1;

    event.preventDefault();
  }
}

export function printSymbol(event) {
  if (!isTextareaFocused) {
    const exclusion = {
      ArrowUp: "▲",
      ArrowDown: "▼",
      ArrowLeft: "◄",
      ArrowRight: "►",
    };

    if (event.code === "Tab") {
      printValue("\t");
      event.preventDefault();
    }

    if (event.code === "CapsLock") {
      setCaps(event);
      event.preventDefault();
      return;
    }

    if (keyboardKeys.includes(event.code) && !options.includes(event.code) && !Object.keys(exclusion).includes(event.code)) {
      printValue(event.key);
      event.preventDefault();
      return;
    }

    if (Object.keys(exclusion).includes(event.code)) {
      printValue(exclusion[event.code]);
      event.preventDefault();
      return;
    }
  }
}

export function getKeyboardKeys() {
  const activeKeys = document.querySelectorAll(".keyboard__key");
  const activeButtons = Array.from(activeKeys).map((key) => key.className.split(" ")[2]);
  return activeButtons;
}

export function makeButtonPressed(event) {
  const eventClassList = event.currentTarget.classList;

  if (eventClassList.contains("ShiftLeft") || eventClassList.contains("ShiftRight")) {
    changeKeysValues("shift");
  }

  event.currentTarget.classList.add("pressed");
}

export function makeButtonUnpressed(event) {
  const eventClassList = event.currentTarget.classList;
  event.currentTarget.classList.remove("pressed");

  if (eventClassList.contains("ShiftLeft") || eventClassList.contains("ShiftRight")) {
    CAPS ? changeKeysValues("caps") : changeKeysValues("lower-case");
    return;
  }
}

export function makeKeyboardButtonPressed(event) {
  const key = document.querySelector(`.${event.code}`);

  if (event.code === "CapsLock") {
    return;
  }

  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    changeKeysValues("shift");
    key.classList.add("pressed");
  }

  if (key) {
    key.classList.add("pressed");
  }
}

export function makeKeyboardButtonUnpressed(event) {
  const key = document.querySelector(`.${event.code}`);

  if (event.code === "CapsLock") {
    return;
  }

  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    CAPS ? changeKeysValues("caps") : changeKeysValues("lower-case");
  }

  if (key) {
    key.classList.remove("pressed");
  }
}
/* ============== */

function deleteSymbol(button) {
  const currentValue = textarea.value;
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;

  if (startPos === 0) {
    return;
  }

  if (button === "Backspace") {
    textarea.value = currentValue.slice(0, startPos - 1) + currentValue.slice(endPos);
    textarea.setSelectionRange(startPos - 1, startPos - 1);
  } else if (button === "Delete") {
    textarea.value = currentValue.slice(0, startPos) + currentValue.slice(endPos + 1);
    textarea.setSelectionRange(startPos, startPos);
  }

  textarea.focus();
}

function printValue(value) {
  const currentValue = textarea.value;
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;

  textarea.value = currentValue.slice(0, startPos) + value + currentValue.slice(endPos);
  textarea.setSelectionRange(startPos + 1, startPos + 1);
  textarea.focus();
}

function setCaps() {
  const capsButton = document.querySelector(".key.CapsLock");
  CAPS = !CAPS;

  if (CAPS) {
    capsButton.classList.add("pressed");
    changeKeysValues("caps");
  } else {
    capsButton.classList.remove("pressed");
    changeKeysValues("lower-case");
  }
}

function changeKeysValues(valueType) {
  const values = document.querySelectorAll(".value");
  values.forEach((value) => {
    if (value.classList.contains(`${valueType}`)) {
      value.classList.remove("hidden");
    } else {
      value.classList.add("hidden");
    }
  });
}
