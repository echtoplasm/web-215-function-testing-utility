# Function Tester

A lightweight Node.js testing utility for JavaScript functions. Built for quick function validation with clear, formatted output.

## Installation

1. Download `functionTester.js` 
2. Place it in your project directory or in your web-215 root directory 
3. Require it in your JavaScript files

## Usage

```javascript
const functionTest = require('./path/to/functionTester.js');

// Test a function
functionTest(yourFunction, [arg1, arg2], expectedOutput, 'Optional description');
```

### Parameters

- `funcCallback` - The function you want to test
- `args` - Array of arguments to pass to the function
- `expout` - Expected output/return value  
- `description` - Optional description of what the test does

### Example

```javascript
const functionTest = require('./functionTester.js');

function add(a, b) {
  return a + b;
}

// Test the add function
functionTest(add, [2, 3], 5, 'Basic addition test');
functionTest(add, [10, -5], 5, 'Addition with negative number');
```

## Running Tests

Save your test file (e.g., `myTests.js`) and run:

```bash
node myTests.js
```

## Output

**Passing Test:**
```
TEST PASSED! FOR add
=====================================
expected output: 5
actual output: 5
arguments passed to function: 2, 3
function description: Basic addition test
=====================================
```

**Failing Test:**
```
FAILED TEST FOR add
=====================================
expected output: 5
actual output: 7
arguments passed to function: 2, 3
function description: Basic addition test
=====================================
The functions result does not equal expected output
```

## Requirements

- Node.js installed on your system
- Basic understanding of JavaScript functions

## Notes

- Always pass arguments as an array, even for single arguments: `[42]`
- Uses loose equality (`!=`) for comparisons
- Description parameter is optional but recommended for clarity
