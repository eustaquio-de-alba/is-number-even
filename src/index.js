import { performCheck } from "./algorithm";

export default {
  isEven: number => {
    return performCheck(number);
  },
  isEvenAsync: number => {
    return new Promise(resolve => {
      resolve(isEven(number));
    });
  }
};
