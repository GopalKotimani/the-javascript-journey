/*
Couter
  🔢 Title: Create a Counter with Increment, Decrement, Reset, and Get Value

  📄 Problem Statement:

Implement a function `makeCounter(initialValue)` that returns an object with the following methods:

- `increment()` → Increases the counter by 1 and returns the new value.  
- `decrement()` → Decreases the counter by 1 and returns the new value.  
- `reset()` → Resets the counter to the initial value and returns it.  
- `getValue()` → Returns the current counter value.

 # 🧠 Notes:
- The `initialValue` is optional. If not provided, it defaults to `0`.
- Each method must update or return the internal counter value properly.
- The counter value must be **maintained privately** using closures.

---

  ✅ Example:

```js
const counter = makeCounter(5);

counter.increment(); // 6
counter.increment(); // 7
counter.decrement(); // 6
counter.getValue();  // 6
counter.reset();     // 5
```

*/

function makeCounter(initialValue = 0) {
    // Your implementation
    let count = initialValue;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = initialValue;
            return count;
        },
        getValue: function () {
            return count;
        }
    }
}

module.exports = makeCounter;