import { performCheck } from "./algorithm";

export const isNumberEven = number => {
  return performCheck(number);
};
export const isNumberEvenAsync = number => {
  return new Promise(resolve => {
    resolve(isNumberEven(number));
  });
};
