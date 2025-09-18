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

const stdInSuccess = (func, expout, args, description='', actual) => {
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
      stdInSuccess(funcCallback, expout, args, description, result);
    }
  } catch (err) {
    console.error('Unable to test function', err.message);
  }
}

module.export(functionTest);
