# is-number-even

A tiny, modular ES6-compliant JavaScript library to check whether the given number is even.
Asynchronous implementation is provided.

## Usage example
### Quick Usage
There are two functions:

- **isNumberEven**
- **isNumberEvenAsync**

  Both receieve number as an argument.
  
  **isNumberEven** returns a boolean.  
  **isNumberEvenAsync** returns a Promise which is resolved to a boolean.

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
### Usage in project
1. npm install is-number-even
2. import { isNumberEven, isNumberEvenAsync } from "is-number-even";
### Example
[Here is a complete example](https://github.com/eustaquio-de-alba/is-number-even/tree/master/examples/is-number-even-usage-example)
