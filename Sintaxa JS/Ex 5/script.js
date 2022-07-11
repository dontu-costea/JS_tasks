/* Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
   Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
   Например:
   alert( extractCurrencyValue('$120') === 120 ); */
function extractCurrencyValue(str) {
	let number = parseInt(str.match(/\d+/));
	return number;
}

alert( extractCurrencyValue('$120') === 120 );