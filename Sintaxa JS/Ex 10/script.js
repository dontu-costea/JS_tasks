/* Напишите функцию которая определяет и выводит в консоль все делитель заданного числа.
   const dividers = (number) => {
   //  your code here
   } */

const dividers = (number) => {
  for (let i = 1; i<=number; i++) {
    if (number%i==0) {
      console.log(i);
    }
  }
}

dividers(15);