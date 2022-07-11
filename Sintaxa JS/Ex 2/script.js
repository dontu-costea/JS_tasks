// Напишите код который посчитает и выведет в консоль сумму четных чисел из интервала [a, b]
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum =0;
for(let i = 0; i < list.length; i++) {
	if(list[i] % 2 == 0) {
		sum = sum + list[i];
	}
}
console.log(`Suma numerelor pare este egala cu ${sum}`);