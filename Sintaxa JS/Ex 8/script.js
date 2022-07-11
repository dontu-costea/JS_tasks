/*Напишите код который проверит правильность username и password и выводит следующие сообщения:
  Привет, если совпадает username и password
  Неправильный пароль если username введен правильно а пароль нет
  Неправильный username, если введен неправильный username
  Ошибка Валидации, если ничего не введено
  PS: На практике не делать такое никогда (писать пользователю что он ввел неверно, username или password) */

const username = "dontu123";
const password = "dontu321";
let getUsername = prompt("Введите имя пользователя (username)!", "");
let getPassword = prompt("Введите пароль (password)!", "");
if(!(username === getUsername) && !(password === getPassword)) {
	alert("Ошибка Валидации");
} else if(username === getUsername && !(password === getPassword)) {
	alert("Неправильный пароль");
} else if(!(username === getUsername) && password === getPassword) {
	alert("Неправильный username");
} else if (username === getUsername && password === getPassword) {
	alert("Привет!");
}
