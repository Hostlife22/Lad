import logger from '../common/logger.js';

const storage = (monster = {}, user = {}) => {
  const store = {
    monster,
    user,
  };

  const setItem = (data, key) => {
    if (!store[key]) {
      logger('Нет такого ключа в хранилище');
    } else {
      store[key] = data;
    }
  };

  const getItem = (key) => {
    if (!store[key]) {
      logger('Нет такого ключа в хранилище');
      return null;
    }
    return store[key];
  };

  return {
    setItem,
    getItem,
  };
};

export default storage;
