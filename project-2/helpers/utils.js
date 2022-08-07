/** Входные данные функции sklonenie:
 * @param {number} number - число
 * @param {array} titles - массив с вариантами написания слова
 * @returns {string} - строка с правильным написанием слова
 */

export const sklonenie = (number, titles, cases = [2, 0, 1, 1, 1, 2]) => titles[
  number % 100 > 4 && number % 100 < 20
    ? 2
    : cases[number % 10 < 5 ? number % 10 : 5]
];

/** Входные данные функции getRandomInt:
 * @param {number} min - минимальное число
 * @param {number} max - максимальное число
 * @returns {number} - случайное число
 */

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
