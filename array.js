/*//Давайте произведём 5 операций с массивом.
//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//Удалите первый элемент массива и покажите его.
//Вставьте «Рэп» и «Регги» в начало массива. 

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);

//Напишите функцию sumInput(), которая:
//Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
//Подсчитывает и возвращает сумму элементов массива.
//P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

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

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString». 

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
//Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//Функция должна изменять принимаемый массив и ничего не возвращать. 

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

//Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);

//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);

//У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = {
  name: "Вася",
  age: 25,
};
let petya = {
  name: "Петя",
  age: 30,
};
let masha = {
  name: "Маша",
  age: 28,
};

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

alert(names);


//У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));


console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

//Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);


//алгоритм Тасование Фишера — Йетса
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
console.log(getAverageAge(arr)); */

//Пусть arr – массив строк.
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));
