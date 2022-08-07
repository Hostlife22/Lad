import colors from 'colors';

/** Выводит сообщение в консоль
 * @param  {string} message - сообщение
 * @param  {string} color - цвет сообщения
 */

const logger = (message, color = 'red') => {
  console.log(colors[color](message));
};

export default logger;
