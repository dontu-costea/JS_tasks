// Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, который в зависимости от числа будет выводить слово 
// (Например, если n равно 3, то будет выводиться слово «три»)

let n = prompt("Dati un numar de la 0 la 9!", "");
switch(n) {
	case "0":
		alert("Zero");
		break;
	case "1":
		alert("Unu");
		break;
	case "2":
		alert("Doi");
		break;
	case "3":
		alert("Trei");
		break;
	case "4":
		alert("Patru");
		break;
	case "5":
		alert("Cinci");
		break;
	case "6":
		alert("Sase");
		break;
	case "7":
		alert("Sapte");
		break;
	case "8":
		alert("Opt");
		break;
	case "9":
		alert("Noua");
		break;
	default:
		alert("Nu ati introdus un numar corect!");
		break;
}