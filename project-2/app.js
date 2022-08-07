import startBattle from './common/battle.js';
import { gameSetup } from './common/gameSetup.js';

const app = () => {
  const { setItem, getItem } = gameSetup();

  startBattle(setItem, getItem, {});
};

export default app;
