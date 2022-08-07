import Features from './common/features.js';
import Logger from './common/logger.js';

class App {
  #loger = Logger;

  #features = new Features(this.#loger.log);

  init() {
    this.#loger.log(
      'Компьютер загадывает число из нескольких различающихся цифр',
    );

    this.#features.getInputRange();
  }
}

export default App;
