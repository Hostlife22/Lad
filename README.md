# webpack-config

Sensible webpack 5 boilerplate using Babel, PostCSS and Sass.

## Installation

Clone this repo and npm install.

```bash
npm install
```

## Usage

### Task - change the name of the days of the week to the English version

```bash
npm run task
```

### Project 1. Bulls and cows

```bash
npm run project-1
```

The computer guesses a number from several different digits (from 3 to 6). The player is given several attempts to guess this number.
After each attempt, the computer reports the number of matching digits that are not in their places, as well as the number of correct digits in their places.
For example, a hidden number: 56478 player's guess: 52976
answer: matching numbers are not in their places - 1 (6), numbers in their places - 2 (5 and 7)
the game is played until the end of the number of moves or until guessing
By the way, in Fallout 3, Fallout New Vegas and Fallout 4, a very similar mini-game is used to hack terminals.

### Project 2. RPG battle

```bash
npm run project-2
```

The fight is on the move. Each turn, the computer (Furious) randomly selects one of the available actions and tells what it is going to do. In response to this, the player (Eustace) must choose his action.
After that, mutual damage occurs. Magic armor blocks magic damage, physical armor blocks physical damage.
Once an action is taken, it cannot be re-selected during cooldown turns
The fight goes on until one of the opponents wins.
Before the start of the battle, the player chooses the difficulty (Evstafiy's initial health)
