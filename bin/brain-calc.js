#!/usr/bin/env node
import playGame from '../src/index.js';
import { rules, formData } from '../src/games/brain-calc-src.js';

playGame(formData, rules);
