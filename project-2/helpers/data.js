export const monsterAbilities = [
  {
    name: 'Удар когтистой лапой',
    physicalDmg: 3, // физический урон
    magicDmg: 0, // магический урон
    physicArmorPercents: 20, // физическая броня
    magicArmorPercents: 20, // магическая броня
    cooldown: 0, // ходов на восстановление
  },
  {
    name: 'Огненное дыхание',
    physicalDmg: 0,
    magicDmg: 4,
    physicArmorPercents: 0,
    magicArmorPercents: 0,
    cooldown: 3,
  },
  {
    name: 'Удар хвостом',
    physicalDmg: 2,
    magicDmg: 0,
    physicArmorPercents: 50,
    magicArmorPercents: 0,
    cooldown: 2,
  },
];

export const userAbilities = [
  {
    name: 'Удар боевым кадилом',
    physicalDmg: 2,
    magicDmg: 0,
    physicArmorPercents: 0,
    magicArmorPercents: 50,
    cooldown: 0,
  },
  {
    name: 'Вертушка левой пяткой',
    physicalDmg: 4,
    magicDmg: 0,
    physicArmorPercents: 0,
    magicArmorPercents: 0,
    cooldown: 4,
  },
  {
    name: 'Каноничный фаербол',
    physicalDmg: 0,
    magicDmg: 5,
    physicArmorPercents: 0,
    magicArmorPercents: 0,
    cooldown: 3,
  },
  {
    name: 'Магический блок',
    physicalDmg: 0,
    magicDmg: 0,
    physicArmorPercents: 100,
    magicArmorPercents: 100,
    cooldown: 4,
  },
];

export const messages = {
  explanationTheRules: 'RPG баттл\n\nБой идет по ходам. Каждый ход компьютер случайно выбирает одно из доступных действий и сообщает,\nчто он собирается делать. В ответ на это вы должеы выбрать свое действие.\nВсе действия имеют разное время восстановления.\nБой идет до победы одного из противников.\n',
  characterName: 'Придумай для своего персонажа имя: ',
  characterNameError: 'Попробуй еще раз ввести имя персонажа: ',
  validationName: 'Имя должно быть не менее 2 и не более 10 символов\n',
  characterHealth: 'Задай для своего персонажа здоровье: ',
  characterHealthError: 'Попробуй еще раз ввести здоровье персонажа: ',
  validationHealth: 'Здоровье должно быть не менее 1 и не более 15, и должно быть числом\n',

};
