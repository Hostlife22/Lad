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

/** Входные данные функции getMinMax:
 * @param {string} numericalRepresentation - строка с числами
 * @returns {array} - массив с минимальным и максимальным числом
 */

export const getMinMax = (numericalRepresentation) => {
  const values = {
    Трехзначное: [100, 999],
    Четырехзначное: [1000, 9999],
    Пятизначное: [10000, 99999],
    Шестизначное: [100000, 999999],
  };

  return values[numericalRepresentation] || [0, 0];
};

/** Входные данные функции getRandomNumber:
 * @param {string} numericalRepresentation - строка с числами
 * @returns {number} - случайное число
*/

export const getRandomNumber = (numericalRepresentation) => {
  const [min, max] = getMinMax(numericalRepresentation);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/** Входные данные функции searchElem:
 * @param {object} obj - объект с данными
 * @returns {boolean} - true или false
*/
export const searchElem = ({
  userNumber, curr, position, outPosition,
}) => {
  const re = userNumber.match(new RegExp(curr, 'g'))?.length || 0;

  if (!re) return false;
  if (re === position.filter((el) => el === curr).length) return false;
  if (re === outPosition.filter((el) => el === curr).length) return false;

  return true;
};
