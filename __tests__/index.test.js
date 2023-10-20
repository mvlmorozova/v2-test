// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import {
  getSquare, isEven, castNumber, checkType, countVowels,
} from '../index.js';

test('task1', () => {
  assert.strictEqual(getSquare(1), 1);
  assert.strictEqual(getSquare(3), 9);
  assert.strictEqual(getSquare(-3), 9);
});

test('task2', () => {
  assert.strictEqual(isEven(2), true);
  assert.strictEqual(isEven(1111), false);
  assert.strictEqual(isEven(-1), false);
});

test('task3', () => {
  assert.strictEqual(castNumber('1'), 1);
  assert.strictEqual(castNumber(2), 2);
  assert.strictEqual(castNumber(false), 0);
  assert.strictEqual(castNumber(''), 0);
  assert.strictEqual(castNumber('Hexlet'), 'given value is not convertable');
});

test('task4', () => {
  assert.strictEqual(checkType('Hexlet'), 'string');
  assert.strictEqual(checkType(0), 'number');
  assert.strictEqual(checkType(NaN), 'number');
  assert.strictEqual(checkType(true), 'boolean');
  assert.strictEqual(checkType(), 'undefined');
  assert.strictEqual(checkType(' '), 'string');
  assert.strictEqual(checkType(() => { }), 'function');
  assert.strictEqual(checkType(122343n), 'bigint');
});

test('task5', () => {
  assert.strictEqual(countVowels('Hexlet'), 2);
  assert.strictEqual(countVowels('HeexlEEt'), 4);
  assert.strictEqual(countVowels(''), 0);
  assert.strictEqual(countVowels('AAAAeejfjfjfijijotigdigfdjkKJHfdskjfhODSFu'), 13);
});
