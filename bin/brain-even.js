#!/usr/bin/env node
import playGame from '../src/index.js';
import { printRules, formData } from '../src/games/brain-even-src.js';

playGame(formData, printRules);
