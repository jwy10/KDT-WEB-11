// var x = 'global';

// function foo() {
//   var x = 'local';
//   console.log(x);
// }

// foo();

// console.log(x);

function foo() {
  console.log('global');
}

function bar() {
  function foo() {
    console.log('local');
  }
  foo();
}

bar();
