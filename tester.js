const funcStdoutFailure = (func, expout, args, description='', actual) => {
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

const stdOutSuccess = (func, expout, args, description='', actual) => {
  try{
  console.log(`
      TEST PASSED! FOR ${func.name}
      =====================================
      expected output: ${expout}
      actual output: ${actual}
      arguments passed to function:  ${args.join(', ')};
      function description: ${description || 'no description'}
      =====================================
  `)
  } catch(err){
    console.error('Unable to standard output function success message::', err.message);
  }
}

function functionTest(funcCallback, args, expout, description) {
  try {
    const result = funcCallback(...args);
    if (result != expout) {
      funcStdoutFailure(funcCallback, expout, args, description, result);
      console.error('The functions result does not equal expected output');
    }else{
      stdOutSuccess(funcCallback, expout, args, description, result);
    }
  } catch (err) {
    console.error('Unable to test function', err.message);
  }
}

module.exports = functionTest;
