import "@scss/style.scss";
import keys from "../assets/keyboard.json";

// let lang = "en";
// const test = { en: "q", ru: "й", option: false, shift: { en: "Q", ru: "Й" } };

// createKeyboard();
// class KeyButton {
//   constructor({ en, ru, option, shift = null }) {
//     this.en = en;
//     this.ru = ru;
//     this.option = option;
//     this.shift = shift;
//   }

//   createKeyElement() {
//     const key = document.createElement("div");
//     key.classList.add("keyboard__key", "key");

//     const keyEng = document.createElement("div");
//     keyEng.classList.add("key__eng");

//     const keyRus = document.createElement("div");
//     keyRus.classList.add("key__rus");

//     const [lower-caseEng, lower-caseRus] = this.createlower-cases(this.en, this.ru);
//     const [upper-caseEng, upper-caseRus] = this.createupper-cases(this.en, this.ru);

//     keyEng.append(lower-caseEng, upper-caseEng);
//     keyRus.append(lower-caseRus, upper-caseRus);

//     console.log(keyEng);

//     key.append(keyEng, keyRus);
//     return key;
//   }

//   createlower-cases(en, ru) {
//     const lower-caseRu = document.createElement("span");
//     lower-caseRu.classList.add("case-down");
//     lower-caseRu.textContent = ru;

//     const lower-caseEn = document.createElement("span");
//     lower-caseEn.classList.add("case-down");
//     lower-caseEn.textContent = en;

//     return [lower-caseEn, lower-caseRu];
//   }

//   createupper-cases(en, ru) {
//     const upper-caseRu = document.createElement("span");
//     upper-caseRu.classList.add("case-up");
//     upper-caseRu.textContent = ru.toUpperCase();

//     const upper-caseEn = document.createElement("span");
//     upper-caseEn.classList.add("case-up");
//     upper-caseEn.textContent = en.toUpperCase();

//     return [upper-caseEn, upper-caseRu];
//   }
// }

// function createKeyboard() {
//   const wrapper = createWrapper();
//   document.body.appendChild(wrapper);
// }

// function createWrapper() {
//   const wrapperElement = document.createElement("div");
//   const containerElement = document.createElement("div");

//   wrapperElement.classList.add("wrapper");
//   containerElement.classList.add("container");
//   wrapperElement.appendChild(containerElement);

//   return wrapperElement;
// }

// const keyTest = new KeyButton(test);
// console.log(keyTest);
// console.log(keyTest.createKeyElement());

// function createKeyElement(key) {
//   const keyElement = document.createElement('div');
//   const insertLineBreak = ['Backspace', '\\', 'Enter', 'Shift'].indexOf(key) !== -1;

//   keyElement.classList.add('keyboard__key');
//   keyElement.textContent = key;

//   switch (key) {
//     case 'Backspace':
//       keyElement.classList.add('backspace');
//       break;
//     case 'Tab':
//       keyElement.classList.add('tab');
//       break;
//     case 'Caps Lock':
//       keyElement.classList.add('caps-lock');
//       break;
//     case 'Enter':
//       keyElement.classList.add('enter');
//       break;
//     case 'Shift':
//       keyElement.classList.add('shift');
//       break;
//     case 'Ctrl':
//     case 'Win':
//     case 'Alt':
//       keyElement.classList.add('modifier');
//       break;
//     case '◄':
//       keyElement.classList.add('arrow-left');
//       break;
//     case '▼':
//       keyElement.classList.add('arrow-down');
//       break;
//     case '►':
//       keyElement.classList.add('arrow-right');
//       break;
//     case ' ':
//       keyElement.classList.add('space');
//       break;
//     default:
//       break;
//   }

//   return keyElement;
// }

// function createRow(keys) {
//   const rowElement = document.createElement('div');
//   rowElement.classList.add('keyboard__row');

//   keys.forEach(key => {
//     const keyElement = createKeyElement(key);
//     rowElement.appendChild(keyElement);
//   });

//   return rowElement;
// }

// function createKeyboard(keyboardLayout) {
//   const keyboardElement = document.createElement('div');
//   const rows = keyboardLayout.map(row => createRow(row));

//   keyboardElement.classList.add('keyboard');
//   rows.forEach(row => keyboardElement.appendChild(row));

//   return keyboardElement;
// }

// function createTextArea() {
//   const textAreaElement = document.createElement('textarea');
//   textAreaElement.setAttribute('id', 'input');
//   textAreaElement.setAttribute('placeholder', 'Click to start typing');
//   return textAreaElement;
// }

// function createContainer() {
//   const containerElement = document.createElement('div');
//   containerElement.classList.add('container');
//   containerElement.appendChild(createTextArea());
//   containerElement.appendChild(createKeyboard(keyboardLayout));
//   return containerElement;
// }

// function createWrapper() {
//   const wrapperElement = document.createElement('div');
//   wrapperElement.classList.add('wrapper');
//   wrapperElement.appendChild(createContainer());
//   return wrapperElement;
// }

// document.body.appendChild(createWrapper());

// const keys = document.querySelectorAll('.keyboard__key');
// keys.forEach(key => {
//   key.addEventListener('click', handleKeyPress);
// });

// function handleKeyPress(event) {
//   const key = event.target.textContent;

//   switch (key) {
//     case 'Backspace':
//       deleteChar();
//       break;
//     case 'Tab':
//       addChar('\t');
//       break;
//     case 'Caps Lock':
//       toggleCapsLock();
//       break;
//     case 'Enter':
//       addChar('\n');
//       break;
//     case 'Shift':
//       handleShift(event);
//       break;
//     case 'Ctrl':
//       handleControl(event);
//       break;
//     case 'Win':
//       handleWin();
//       break;
//     case 'Alt':
//       handleAlt(event);
//       break;
//     case '◄':
//       moveCaretLeft();
//       break;
//     case '▼':
//       moveCaretDown();
//       break;
//     case '►':
//       moveCaretRight();
//       break;
//     case ' ':
//       addChar(' ');
//       break;
//     default:
//       addChar(getChar(key));
//       break;
//   }
// }

[
  [
    {
      en: {
        down: "`",
        up: "~",
        caps: "`",
        shift: "~",
      },
      ru: {
        down: "ё",
        up: "Ё",
        caps: "Ё",
        shift: "ё",
      },
    },
  ],
];
