// function checkStringLength(text, length) {
//     if (text.length <= length){
//         return true
//     }else{
//         return false
//     }
// }

// const checkStringLength = (text, length) => {
//     if (text.length <= length) {
//         return true
//     } else {
//         return false
//     }
// }

// const checkStringLength = (text, length) => {
//     return text.length <= length
// }

// eslint-disable-next-line no-unused-vars
const checkStringLength = (text, length) => text.length <= length;


// console.log(checkStringLength('строка для проверки', 30))
// console.log(checkStringLength('строка для проверки', 10))

// eslint-disable-next-line no-unused-vars
const isPalindrom = (text) => {
  const normalized = text.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed = reversed + normalized[i];
  }
  return normalized === reversed;
};

// console.log(isPalindrom('Лёша на полке клопа нашёл '))

/*
Функция принимает строку,
извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры,
функция должна вернуть NaN:

*/

// eslint-disable-next-line no-unused-vars
const getNumber = (text) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const letter = parseInt(text[i], 10);
    if (!isNaN(letter)) {
      result = result + text[i];
    }
  }
  return parseInt(result, 10);
};
