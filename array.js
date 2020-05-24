/*Давайте произведём 5 операций с массивом.
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива. */


let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);

/*Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/


function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());

/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString». */

function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}


/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.*/

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

/*Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать. */

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
console.log(arr);

/*Сортировать в порядке по убыванию*/

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);

/*У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.*/

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);

/*У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.*/

let vasya = {
  name: "Вася",
  age: 25
};
let petya = {
  name: "Петя",
  age: 30
};
let masha = {
  name: "Маша",
  age: 28
};

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

alert(names);