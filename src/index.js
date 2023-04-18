const displayPass = document.getElementById("generatedisplay");
const copyToClipboard = document.getElementById("copybtn");
const lengthChar = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const num = document.getElementById("numb");
const symbol = document.getElementById("symb");
const strengthText = document.getElementById("strengthtext");
const generateBtn = document.getElementById("generatebtn");

const arrUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Y",
  "W",
  "Z",
];

const arrLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "w",
  "z",
];

const arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const arrSym = ["!", "@", "#", "&", "*", "-", "_", "~", "/", "|"];

function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

var password = [];

generateBtn.addEventListener("click", () => {
  const shuffleArrNum = shuffleArr(arrNum);
  const shuffleArrSym = shuffleArr(arrSym);
  const shuffleArrUpper = shuffleArr(arrUpper);
  const shuffleArrLower = shuffleArr(arrLower);
  const charNum = lengthChar.value;
  const charLength = parseInt(charNum);
  var count = 0;
  var repeatNum = 2;

  while (count < charLength) {
    if (displayPass.value) {
      return;
    }
    if (!upper.checked) {
      var validUpper = false;
    } else {
      password.push(shuffleArrUpper[count % shuffleArrUpper.length]);
      count += 1;
      if (count === charLength) {
        break;
      }
    }
    if (!lower.checked) {
      var validLower = false;
    } else {
      password.push(shuffleArrLower[count % shuffleArrLower.length]);
      count += 1;
      if (count === charLength) {
        break;
      }
    }
    if (!num.checked) {
      var validNum = false;
    } else {
      var repeatCount = 0;
      while (repeatCount < repeatNum && count < charLength) {
        password.push(shuffleArrNum[count % shuffleArrNum.length]);
        count += 1;
        repeatCount += 1;
      }
      if (count === charLength) {
        break;
      }
    }
    if (!symbol.checked) {
      var validSymb = false;
    } else {
      password.push(shuffleArrSym[count % shuffleArrSym.length]);
      count += 1;
      if (count === charLength) {
        break;
      }
    }

    if (
      validUpper === false &&
      validLower === false &&
      validNum === false &&
      validSymb === false
    ) {
      return;
    }
  }

  const shufflePass = shuffleArr(password);
  const passToString = shufflePass.toString();
  const newPassword = passToString.replace(/,/g, "");
  displayPass.value = newPassword;

  console.log(password, newPassword);
});

copyToClipboard.addEventListener("click", () => {
  if (displayPass.value) {
    copyToClipboard.style.backgroundColor = "#A1DA87";
    setInterval(() => {
      copyToClipboard.style.backgroundColor = "#666";
    }, 1000);
    navigator.clipboard.writeText(displayPass.value);
  }
});
