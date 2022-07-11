/* Напишите код который при открытии страницы запросит у пользователя его имя(prompt). После ввода имени, вывести ему сообщение `Привет ${name}`. 
   Спросить у пользователя если он знаком с языком JavaScript(confirm) и вывести `Молодец`, если его ответ Да 
   и сообщение `Можно начать изучение прямо сейчас`, если его ответ Нет. */

let name = prompt("Introduceti numele.", "");
alert(`Salut ${name}!`);
let knowJs = confirm("Sunteti cunoscut cu JavaScript?");
(knowJs) ? alert("Bravo!") : alert("Puteti sa incepeti sa invatati chiar acum!");
/* if(knowJs) {
	alert("Bravo!");
} else {
	alert("Puteti sa incepeti sa invatati chiar acum!");
} */