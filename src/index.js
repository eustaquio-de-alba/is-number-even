import { performCheck } from "./algorithm";

export const isNumberEven = number => {
  return performCheck(number);
};
export const isEvenAsync = number => {
  return new Promise(resolve => {
    resolve(isNumberEven(number));
  });
};
