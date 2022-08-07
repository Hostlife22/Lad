import { sklonenie } from '../helpers/utils.js';

/** Входные данные
 * @param  {object} ability - объект способности
 * @param  {string} type - тип сообщения
 * @param  {string} characterName - имя персонажа
 * @returns {string} - сообщение
 */

const generateMessage = (ability, type, characterName) => {
  const {
    name,
    physicalDmg,
    magicDmg,
    physicArmorPercents,
    magicArmorPercents,
    cooldown,
  } = ability;
  let damageType = '';
  let messageAboutArmor = '';
  const damageValue = physicalDmg || magicDmg;
  const step = sklonenie(cooldown, ['ход', 'хода', 'ходов']);
  const damage = sklonenie(damageValue, ['единица', 'единицы', 'единиц']);

  if (physicalDmg || magicDmg) {
    damageType = physicalDmg ? 'физического' : 'магического';
  }

  if (physicArmorPercents && magicArmorPercents) {
    messageAboutArmor = `Добавляет ${physicArmorPercents}% физической брони и ${magicArmorPercents}% магической брони`;
  } else if (physicArmorPercents || magicArmorPercents) {
    messageAboutArmor = physicArmorPercents
      ? `Добавляет ${physicArmorPercents}% физической брони`
      : `Добавляет ${magicArmorPercents}% магической брони`;
  } else {
    messageAboutArmor = 'Способность не добавляет броню';
  }

  const variants = {
    monster: `${characterName} использовал способность "${name}" и может нанести ${damageValue} ${damage} ${damageType} урона.\n${messageAboutArmor}. Кулдаун ${cooldown} ${step}`,
    user: `\nВы использовали способность "${name}" и можете нанести ${damageValue} ${damage} ${damageType} урона.\n${messageAboutArmor}. Кулдаун ${cooldown} ${step}\n`,
    ability: `Способность "${name}" наносит ${damageValue} ${damage} ${damageType} урона.\n${messageAboutArmor}. Кулдаун ${cooldown} ${step}`,
  };

  return variants[type] || variants.ability;
};

export default generateMessage;
