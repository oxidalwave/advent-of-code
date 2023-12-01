import { z } from "zod";

const inputValidator = z.string().regex(/^[()]*$/);

export const stage1 = (input: string) =>
  Array.from(inputValidator.parse(input)).reduce(
    (p, c) => (c === "(" ? p + 1 : c === ")" ? p - 1 : 0),
    0,
  );

export const stage2 = (input: string) => {
  const validated = inputValidator.parse(input);
  let cur = 0;
  for (let i = 1; i <= validated.length; i++) {
    const char = validated.charAt(i - 1);
    cur += char === "(" ? 1 : -1;
    if (cur < 0) {
      return i;
    }
  }
  return -1;
};
