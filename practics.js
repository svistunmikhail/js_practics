/* console.log('Hello world!');
const PUBLIC_URL = 'http://test.com';
const ANOTHER_PUBLIC_URL = "http://test.com";
const a = '"Test"';
const b = "'Test'";
console.log(a, b); */

/* let c;
c = 1;
c = 10;
c = 500;
const d;
d = 1;
if (true) {
    var e = 1;
    console.log(e);
}
console.log(e);
let f = null;
console.log(f);
console.log(1 == true);
console.log(1 === '1');
const g = 100 + '30' + 2;
console.log(g);
console.log('mango'.indexOf('man'));
console.log('mango'.indexOf('nam'));
console.log('Mango'.toLowerCase());
console.log('Mango'.toUpperCase());
console.log('undefined:', Boolean(undefined));
console.log('0', Boolean(0));
console.log('false as string', Boolean('false'));
console.log('empty string', Boolean(''));
console.log('non-empty string', Boolean(' '));
console.log('boolean false', Boolean(false));
const f = 'Hello world!';
console.log('test ' + 1 + ' test');
console.log(`Test: ${200 + 100}: ${f}`);
console.log(Number('25.7px'));
console.log(parseInt('25.7px'));
console.log(parseFloat('25.7px')); 
const obj = {
	a: 1,
};
obj.b = 'string';
console.log('string', typeof 'string');
console.log('number', typeof 12);
console.log('boolean', typeof true);
console.log('undefined', typeof undefined);
console.log('null', typeof null);
console.log('NaN', typeof NaN);
console.log('object', typeof obj);
console.log('array', typeof []);
console.log(typeof obj.b); */

/* Example 1 - Базовые математические операторы
Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда. */

/* const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = apples - grapes;
console.log(diff); */

/* Example 2 - Комбинированные операторы
Замени выражение переопределения комбинированным оператором +=. */

/* let students = 100;
students += 50;
console.log(students); */

/* Example 3 - Приоритет операторов
Разбери приоритет операторов в инструкции присвоения значения переменной result. */

/* const result = 108 + 223 - 2 * 5;
console.log(result); */

/* Example 4 - Класс Math
Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. 
Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9. */

/* const value = 27.5;
console.log('floor', Math.floor(27.5));
console.log('ceil', Math.ceil(27.5));
console.log('round', Math.round(27.5));
console.log('round', Math.round(27.4)); */

/* Example 5 - Шаблонные строки
Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку. */

/* const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock" */

/* Example 6 - Методы строк и чейнинг
Напиши скрипт который рассчитывает индекс массы тела человека. 
Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). 
Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
Индекс массы тела необходимо округлить до одной цифры после запятой; */

/* let weight = '88,3';
let height = '1.75';
const weightFloat = parseFloat(weight.replace(',', '.'));
const heightFloat = parseFloat(height.replace(',', '.'));
const bmi = weightFloat / (heightFloat ** 2);
console.log(+bmi.toFixed(1)); // 28.8 */

/* Example 7 - Операторы сравнения и приведение типов
Каким будет результат выражений? 
https://en.wikipedia.org/wiki/List_of_Unicode_characters
*/

// console.log(5 > 4);
// console.log(10 >= '7');
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null);
// console.log(undefined === null);

/* Example 8 - Логические операторы
Каким будет результат выражений? */

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

/* Example 9 - Значение по умолчанию и оператор нулевого слияния
Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null. 
В противном случае должно присваиваться значение defaultValue. 
Проверь работу скрипта для следующих значений переменной incomingValue: null, undefined, 0, false. 
Используй оператор ?? (nullish coalescing operator). */

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

/* Example 10 - Опертор % и методы строк
Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.
70 покажет 01:10
450 покажет 07:30
1441 покажет 24:01 */

// const totalMinutes = 70;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);

// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);