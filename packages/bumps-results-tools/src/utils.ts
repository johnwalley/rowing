/**
 * Generates an array of numbers forming a range.
 *
 * The range starts at the specified `start` value and increments by `step` until it reaches (but does not include) the `end` value.
 * If `step` is negative, the range decrements from `start` until it is greater than `end`.
 *
 * @param start - The beginning of the range.
 * @param end - The end of the range (exclusive).
 * @param step - The value to increment (or decrement) by on each iteration. Defaults to 1.
 * @returns An array of numbers starting from `start` and ending before `end`, incremented (or decremented) by `step`.
 * @throws Error if `step` is zero.
 */
export function range(start: number, end: number, step: number = 1): number[] {
  if (step === 0) {
    throw new Error("Step cannot be zero.");
  }

  const result: number[] = [];

  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }

  return result;
}
