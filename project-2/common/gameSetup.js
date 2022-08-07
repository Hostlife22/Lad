import colors from 'colors';
import readlineSync from 'readline-sync';
import { messages, monsterAbilities, userAbilities } from '../helpers/data.js';
import storage from '../storage/storage.js';
import logger from './logger.js';

/** Входные данные функции setСharacterName:
 * @param {string} message - сообщение
 * @returns {string} - имя персононажа
 */

export const setСharacterName = (message) => {
  const userInputValue = readlineSync.question(
    colors.green(message),
  );

  if (userInputValue.length < 2 || userInputValue.length > 10) {
    logger(messages.validationName);
    return setСharacterName(messages.characterNameError);
  }

  return userInputValue;
};

/** Входные данные функции setСharacterAbilities:
 * @param {string} message - сообщение
 * @returns {number} - здоровье персононажа
*/

export const setCharecterHealth = (message) => {
  const userInputValue = Number(readlineSync.question(
    colors.green(message),
  ));

  const isNumber = Number.isNaN(userInputValue);

  if (isNumber || userInputValue < 1 || userInputValue > 15) {
    logger(messages.validationHealth);
    return setCharecterHealth(messages.characterNameError);
  }

  return userInputValue;
};

/** Функции selectMonster:
 * @returns {object} - объект с данными о монстре
 */

export const selectMonster = () => {
  const monsters = [
    'Ураган - 5 единиц здоровья',
    'Лютый - 10 единиц здоровья',
    'Фаталис - 15 единиц здоровья',
  ];
  const index = readlineSync.keyInSelect(monsters, colors.green('Выбери монстра:'), { cancel: false });

  return {
    name: monsters[index].split(' - ')[0],
    maxHealth: Number(monsters[index].split(' - ')[1].split(' ')[0]),
  };
};

/** Функции gameSetup:
 * @param {object}- объект с функциями, которые можно использовать (setItem, getItem)
 */

export const gameSetup = () => {
  const characterName = setСharacterName(messages.characterName);
  const characterHealth = setCharecterHealth(messages.characterHealth);

  logger(`\nПерсонаж ${characterName} создан и у него ${characterHealth} здоровья`);

  const monster = selectMonster();
  logger(`\nМонстр ${monster.name} выбран и у него ${monster.maxHealth} единиц здоровья\n`);

  return storage(
    { ...monster, moves: monsterAbilities },
    { name: characterName, maxHealth: characterHealth, moves: userAbilities },
  );
};
