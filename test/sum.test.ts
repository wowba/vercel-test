import { expect, test, describe } from 'vitest';
import { sum, minus } from '../src/sum';

describe('더하기 테스트', () => {
  test('test sum 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  }),
    test('test sum 2 + 3 = 5', () => {
      expect(sum(2, 3)).toBe(5);
    });
});

describe('빼기 테스트', () => {
  test('test minus 2 - 1 = 1', () => {
    expect(minus(2, 1)).toBe(1);
  }),
    test('test minus 3 - 2 = 1', () => {
      expect(minus(3, 2)).toBe(1);
    });
});
