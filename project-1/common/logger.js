import colors from 'colors';

class Logger {
  static log(message) {
    console.log(colors.red(message));
  }
}

export default Logger;
