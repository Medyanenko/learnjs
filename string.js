// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
    //if (!str) return str;
    let strUpperCase = str[0].toUpperCase() + str.substring(1);
    return strUpperCase;
}

console.log(ucFirst("123"));

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
function checkSpam(str) {

    let strLower = str.toLowerCase();
    return strLower.includes("viagra") || strLower.includes("xxx");
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

/* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
   Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.*/