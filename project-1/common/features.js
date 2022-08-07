import colors from 'colors';
import readlineSync from 'readline-sync';
import { getRandomNumber, searchElem, sklonenie } from '../helpers/helpers.js';

class Features {
  constructor(logger) {
    this.logger = logger;
    this.index = null;
    this.attempts = null;
    this.hiddenNumber = null;
  }

  getInputRange() {
    const numericalRepresentation = [
      'Трехзначное',
      'Четырехзначное',
      'Пятизначное',
      'Шестизначное',
    ];

    this.index = readlineSync.keyInSelect(
      numericalRepresentation,
      colors.green('Выбери количество знаков:'),
    );

    if (this.index === -1) {
      this.logger('Вы вышли с приложения');
    }

    if (typeof this.index === 'number' && this.index !== -1) {
      this.logger(`Хорошо, загадал ${numericalRepresentation[this.index].toLowerCase()} число`);
      this.hiddenNumber = getRandomNumber(numericalRepresentation[this.index]);
      this.enteringAttempts('Введите количество попыток: ');
    } else {
      this.errorProcessing();
    }
  }

  enteringAttempts(message) {
    const attempts = Number(readlineSync.question(colors.green(message)));
    const isNumber = !Number.isNaN(attempts);

    if (isNumber && attempts > 0) {
      const text = sklonenie(attempts, ['попытка', 'попытки', 'попыток']);
      this.attempts = attempts;

      this.logger(`У вас - ${attempts} ${text}`);
      this.userInput('Введите число: ');
    } else if (isNumber && attempts <= 0) {
      this.logger('У вас нет попыток');
      this.enteringAttempts('Введите количество попыток больше 0: ');
    } else {
      this.errorProcessing();
      this.enteringAttempts('Введите количество попыток в числовом формате: ');
    }
  }

  userInput(message) {
    const userInputValue = readlineSync.question(colors.green(message));
    const isNumber = !Number.isNaN(Number(userInputValue));

    if (isNumber) {
      this.checkNumber(userInputValue);
    } else {
      this.errorProcessing();
      this.userInput('Введите число, a не строку: ');
    }
  }

  checkNumber(userNumber) {
    const isCorrect = this.hiddenNumber === Number(userNumber);

    if (isCorrect) {
      this.logger('Ура! Вы угадали!');
    } else if (this.attempts > 1) {
      const text = sklonenie(this.attempts, ['попытка', 'попытки', 'попыток']);

      this.attempts -= 1;
      this.checkPosition(userNumber);
      this.logger(`У вас осталось ${this.attempts} ${text}`);
      this.userInput('Попробуйте еще раз ввести число: ');
    } else {
      this.logger(`У вас закончились попытки и вы не угадали, a загаданное число: ${this.hiddenNumber}`);
    }
  }

  checkPosition(userNumber) {
    const position = this.hiddenNumber
      .toString()
      .split('')
      .reduce(
        (acc, curr, index) => {
          let value;

          if (curr === userNumber[index]) {
            value = { ...acc, position: acc.position.concat(curr) };
          } else if (searchElem({ userNumber, curr, ...acc })) {
            value = { ...acc, outPosition: acc.outPosition.concat(curr) };
          }

          return value || acc;
        },
        { position: [], outPosition: [] },
      );

    this.matchСhecking(position.position, position.outPosition);
  }

  matchСhecking(position, outPosition) {
    const positionLength = position.length;
    const outPositionLength = outPosition.length;
    const textPosition = position.join(', ');
    const textOutPosition = [...outPosition].sort().join(', ');

    if (positionLength && outPositionLength) {
      this.logger(`Цифр на своих местах - ${positionLength} (${textPosition}), cовпавших цифр не на своих местах - ${outPositionLength} (${textOutPosition})`);
    } else if (positionLength && !outPositionLength) {
      this.logger(`Цифр на своих местах - ${positionLength} (${textPosition})`);
    } else if (outPositionLength && !positionLength) {
      this.logger(`Cовпавших цифр не на своих местах - ${outPositionLength} (${textOutPosition})`);
    } else {
      this.logger('Таких цифр нет в загаданном числе');
    }
  }

  errorProcessing() {
    this.logger('Упс, что-то пошло не так');
  }
}

export default Features;
