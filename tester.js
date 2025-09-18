const funcStdoutFailure = (func, expout, args, description = '', actual) => {
  try {
    console.error(`

      FAILED TEST FOR ${func.name}
      =====================================
      expected output: ${expout}
      actual output: ${actual}
      arguments passed to function:  ${args.join(', ')};
      function description: ${description || 'no description'}
      =====================================
`);
  } catch (err) {
    console.error('Unable to output test results', err.message);
  }
};

const stdOutSuccess = (func, expout, args, description = '', actual) => {
  try {
    console.log(`
      TEST PASSED! FOR ${func.name}
      =====================================
      expected output: ${expout}
      actual output: ${actual}
      arguments passed to function:  ${args.join(', ')};
      function description: ${description || 'no description'}
      =====================================
  `);
  } catch (err) {
    console.error('Unable to standard output function success message::', err.message);
  }
};

function functionTest(funcCallback, args, expout, description) {
  try {
    const result = funcCallback(...args);
    if (result != expout) {
      funcStdoutFailure(funcCallback, expout, args, description, result);
      console.error('The functions result does not equal expected output');
    } else {
      stdOutSuccess(funcCallback, expout, args, description, result);
    }
  } catch (err) {
    console.error('Unable to test function', err.message);
  }
}

/**
 * Example function to be passed to function test
 * that adds 2 numbers together

const add = (n1, n2) => {
  return n1 + n2;
};

// args for functionTest as follows
// add = name of function 
// [1, 3] = array of args for add 
// 4 = expected result 
// "function that.." = Description of function 

functionTest(add, [1, 3], 4, "function that adds two nums");
 
 *
 */

module.exports = functionTest;
