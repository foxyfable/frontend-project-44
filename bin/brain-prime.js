#!/usr/bin/env node
import playGame from '../src/index.js';
import { rules, formData } from '../src/games/brain-prime-src.js';

playGame(formData, rules);
