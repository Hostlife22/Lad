import { getRandomInt } from '../helpers/utils.js';
import { MONSTER_KEY, USER_KEY } from '../helpers/variables.js';
import { characterAttack, getDamage } from './ battleHandling.js';
import { getAvailableMoves, getCooldowns, getUserAbility } from './battleUtils.js';

/** Входные данные функции startBattle:
 * @param {function} setItem - функция, которая записывает данные в storage
 * @param {function} getItem - функция, которая получает данные из storage
 * @param {object} cooldowns - объект с данными о кулдаунах
*/

const startBattle = (setItem, getItem, cooldowns) => {
  const monster = getItem(MONSTER_KEY);
  const user = getItem(USER_KEY);

  const availableMonsterMoves = getAvailableMoves(cooldowns, monster.moves);
  const monsterAbility = availableMonsterMoves[getRandomInt(0, availableMonsterMoves.length - 1)];
  const monsterAttacked = characterAttack(monster.name, MONSTER_KEY, monsterAbility);

  const availableUserMoves = getAvailableMoves(cooldowns, user.moves);
  const userAbility = getUserAbility(user.name, availableUserMoves);
  const userAttacked = characterAttack(user.name, USER_KEY, userAbility);

  const nextCooldowns = getCooldowns(cooldowns, [monsterAbility, userAbility]);

  const isNextStep = getDamage({
    monsterAttacked, userAttacked, monster, user,
  }, setItem);

  if (isNextStep) {
    startBattle(setItem, getItem, nextCooldowns);
  }
};

export default startBattle;
