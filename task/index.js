const daysWeek = {
  MONDAY: 'ПОНЕДЕЛЬНИК',
  TUESDAY: 'ВТОРНИК',
  WEDNESDAY: 'СРЕДА',
  THURSDAY: 'ЧЕТВЕРГ',
  FRIDAY: 'ПЯТНИЦА',
  SATURDAY: 'СУББОТА',
  SUNDAY: 'ВОСКРЕСЕНЬЕ',
};

const str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;

const replaceDays = (text, days) => {
  let newStr = text;

  Object.keys(days).forEach((key) => {
    newStr = newStr.replaceAll(days[key], key);
  });

  return newStr;
};

const result = replaceDays(str, daysWeek);

console.log(result);
