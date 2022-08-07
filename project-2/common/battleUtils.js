import readlineSync from 'readline-sync';
import { ABILITY_KEY } from '../helpers/variables.js';
import generateMessage from './generateMessage.js';

/** Входные данные функции getUserAbility:
 * @param {string} name - имя персонажа
 * @param {array} availableMoves - массив доступных способностей
 * @returns {object} - объект с данными о способности
 */

export const getUserAbility = (name, abilities) => {
  const abilitiesNames = abilities.map((ability) => generateMessage(ability, ABILITY_KEY, name));
  const index = readlineSync.keyInSelect(
    abilitiesNames,
    `${name}, выбери способность: `,
    { cancel: false },
  );
  return abilities[index];
};

/** Входные данные функции getAvailableMoves:
 * @param {object} cooldowns - объект с данными о кулдаунах
 * @param {array} abilities - массив способностей
 * @returns {array} - массив доступных способностей
 */

export const getAvailableMoves = (cooldowns, abilities) => {
  const availableAbilities = abilities.filter((ability) => {
    const { name } = ability;
    const cooldown = cooldowns[name];

    return !cooldown;
  });

  return availableAbilities;
};

/** Входные данные функции getCooldowns:
 * @param {object} cooldowns - объект с данными о кулдаунах
 * @param {array} abilities - массив способностей
 * @returns {object} - объект с новыми данными о кулдаунах
*/

export const getCooldowns = (cooldowns, abilities) => {
  const newCooldowns = {};

  abilities.forEach((ability) => {
    const { name, cooldown } = ability;
    const currentCooldown = cooldowns[name];

    Object.keys(cooldowns).forEach((key) => {
      const currentValue = cooldowns[key];
      if (currentValue > 1) newCooldowns[key] = currentValue - 1;
    });

    if (!currentCooldown && cooldown > 0) {
      newCooldowns[name] = cooldown;
    }
  });

  return newCooldowns;
};
