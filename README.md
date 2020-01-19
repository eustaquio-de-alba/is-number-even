# is-number-even

A tiny, modular ES6-compliant JavaScript library to check whether the given number is even.
Asynchronous implementation is provided.

## Usage example

There are two functions:

- isNumberEven
- isNumberEvenAsync
  Both receieve number as an argument.
  isNumberEven returns a boolean.
  isNumberEvenAsync returns a Promise<boolean>.

```javascript
import { isNumberEven, isNumberEvenAsync } from "is-number-even";

const isTwoEven = isNumberEven(2);
const isThreeEven = isNumberEven(3);
const isTwoEvenAsyncPromise = isNumberEvenAsync(2);
const isThreeEvenAsyncPromise = isNumberEvenAsync(3);

isTwoEvenAsyncPromise.then(isEvenResult => {
  // use the result
});
```
