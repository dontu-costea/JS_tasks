/* Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
   1, если значение больше нуля,
   -1, если значение меньше нуля,
   0, если значение равно нулю.
   Error, если введено не число */
const number = prompt("Introduceti un numar.", "");
if(number > 0) {
	alert(1);
} else if(number < 0) {
	alert(-1);
} else if(number == 0) {
	alert(0);
} else {
	alert("Error");
}