import { isNumberEven, isNumberEvenAsync } from "is-number-even";

const isTwoEven = isNumberEven(2);
const isThreeEven = isNumberEven(3);
const isTwoEvenAsyncPromise = isNumberEvenAsync(2);
const isThreeEvenAsyncPromise = isNumberEvenAsync(3);

document.getElementById("two").innerText = `Is 2 even? ${isTwoEven}.`;
document.getElementById("three").innerText = `Is 3 even? ${isThreeEven}.`;

isTwoEvenAsyncPromise.then(isEvenResult => {
  document.getElementById(
    "two"
  ).innerText = `Is 2 even async? ${isEvenResult}.`;
});

isThreeEvenAsyncPromise.then(isEvenResult => {
  document.getElementById(
    "three"
  ).innerText = `Is 3 even async? ${isEvenResult}.`;
});
