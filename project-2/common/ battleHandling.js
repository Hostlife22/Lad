import { MONSTER_KEY, USER_KEY } from '../helpers/variables.js';
import generateMessage from './generateMessage.js';
import logger from './logger.js';

/** Входные данные функции characterAttack:
 * @param {string} name - имя персонажа
 * @param {string} character - тип персонажа
 * @param {object} ability - объект способности
 * @returns {object} - объект с данными о способности
 */

export const characterAttack = (name, character, ability) => {
  const {
    physicalDmg, magicDmg, physicArmorPercents, magicArmorPercents,
  } = ability;
  const message = generateMessage(ability, character, name);

  logger(message, 'green');

  return {
    name,
    ability: ability.name,
    physicalDmg,
    magicDmg,
    physicArmorPercents,
    magicArmorPercents,
  };
};

/** Входные данные функции monsterAttack:
 * @param {object} monster - объект монстра
 * @param {object} user - объект пользователя
 * @returns {object} - объект с данными о итоговом уроне
 */

export const damageCalculation = (monster, user) => {
  const { physicalDmg: monsterPhysicalDmg, magicDmg: monsterMagicDmg } = monster;
  const { physicalDmg: userPhysicalDmg, magicDmg: userMagicDmg } = user;

  const monsterPhysicArmor = monster.physicArmorPercents / 100;
  const monsterMagicArmor = monster.magicArmorPercents / 100;
  const userPhysicArmor = user.physicArmorPercents / 100;
  const userMagicArmor = user.magicArmorPercents / 100;

  const monsterDamage = monsterPhysicalDmg * (1 - userPhysicArmor)
    + monsterMagicDmg * (1 - userMagicArmor);
  const userDamage = userPhysicalDmg * (1 - monsterPhysicArmor)
    + userMagicDmg * (1 - monsterMagicArmor);

  return {
    monsterDamage,
    userDamage,
  };
};

/** Входные данные функции getUserAbility:
 * @param {object} obj - объект с данными о персонажах и нанесенном уроне
 * @param {function} setItem - функция, которая записывает данные в storage
 * @returns {boolean} - возвращает true, если игра не закончена и false, если закончена
 */

export const getDamage = (
  {
    monsterAttacked, userAttacked, monster, user,
  },
  setItem,
) => {
  const { monsterDamage, userDamage } = damageCalculation(monsterAttacked, userAttacked);
  const currentMonsterHealth = monster.maxHealth - userDamage;
  const currentUserHealth = user.maxHealth - monsterDamage;

  setItem({ ...monster, maxHealth: currentMonsterHealth }, MONSTER_KEY);
  setItem({ ...user, maxHealth: currentUserHealth }, USER_KEY);

  const userMessage = `Вы нанесли ${userDamage} урона монстру. У монстра осталось ${
    currentMonsterHealth > 0 ? currentMonsterHealth.toFixed(1) : 0
  } здоровья\n`;
  const monsterMessage = `Монстр нанес вам ${monsterDamage} урона. У вас осталось ${
    currentUserHealth > 0 ? currentUserHealth.toFixed(1) : 0
  } здоровья\n`;

  logger(userMessage + monsterMessage);

  if (currentMonsterHealth > 0 && currentUserHealth > 0) return true;
  if (currentMonsterHealth <= 0 && currentUserHealth > 0) logger('Вы победили монстра!');
  else if (currentMonsterHealth > 0 && currentUserHealth <= 0) logger('Вы проиграли!');
  else logger('Ничья!');

  return false;
};
