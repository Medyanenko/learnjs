//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );


//Как правильно округлить 6.35?
alert( Math.round(6.35 * 10) / 10);

//Ввод числового значения

function readNumber(){
    let num;
    do{
        num = prompt("Введите число", 0);
    }
    while ( !isFinite(num) );

    if (num === null || num === '') return null;

        return +num;
}

alert(`Число: ${readNumber()}`);

//Случайное целое число от min до max

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );