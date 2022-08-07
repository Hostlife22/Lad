import app from './app.js';
import logger from './common/logger.js';
import { messages } from './helpers/data.js';

const init = () => {
  logger(messages.explanationTheRules);
  app();
};

init();
