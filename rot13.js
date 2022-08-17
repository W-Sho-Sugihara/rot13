const ALPHABET = [
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
  "w",
  "x",
  "y",
  "z",
];

function isUppercase(string) {
  return string === string.toUpperCase();
}

function rot13(string) {
  const ROTATE = 13;
  const ALPHABETLENGTH = 26;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (!ALPHABET.includes(string[i].toLowerCase())) {
      result += string[i];
      continue;
    }
    let uppercase = isUppercase(string[i]);
    let currentIndex = ALPHABET.indexOf(string[i].toLowerCase());
    let rotatedIndex = (currentIndex + ROTATE) % ALPHABETLENGTH;
    result += uppercase
      ? ALPHABET[rotatedIndex].toUpperCase()
      : ALPHABET[rotatedIndex];
  }
  return result;
}
console.log(
  rot13(rot13(rot13("Teachers open the door, but you must enter by yourself.")))
);
