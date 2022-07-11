// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом. Например: ucFirst("вася") == "Вася";
let name = prompt("Introduceti un cuvant cu litere mici","")
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst(name));