/* Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
   Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора. */

const age = Number(prompt("Introduceti un numar"));

if(isNaN(age)) {
	alert("Nu ati introdus o cifra")
} else if(!(age < 14 || age > 90)) {
	alert(`Numarul ${age} se afla in diapazonul 14-90`)
} else {
	alert(`Numarul ${age} nu se afla in diapazonul 14-90`)
}

if(isNaN(age)) {
	alert("Nu ati introdus o cifra")
} else if((age > 14 & age < 91) || (age < 90 & age > 13)) {
	alert(`Numarul ${age} se afla in diapazonul 14-90`)
} else {
	alert(`Numarul ${age} nu se afla in diapazonul 14-90`)
}