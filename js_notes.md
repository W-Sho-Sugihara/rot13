- JS primitive data types

  numbers, strings, booleans, null, undefined (symbol, bigint are newely added)

- literal

  notation for displaying a value of a data type

  "Data type values can be represented by literals. A literal is any notation that lets you represent a fixed value in source code." -LS

- Constructors

  The equivelant of a Ruby class object. Has properties (class methods) and methods (instance methods)

- Expression

  'An expression is anything that JavaScript can evaluate to a value, even if that value is undefined or null. With few exceptions, almost everything you write in JavaScript is an expression. JavaScript expressions evaluate to a value that can be captured and used in subsequent code.' -LS

- Statement

  'Statements often include expressions as part of their syntax, but the statement itself is not an expression -- its value cannot be captured and reused later in your code. The key difference between a statement and an expression is that you can't capture a value from a statement. ' -LS

- Identifiers

  A broad name for variables. Identifiers also reference:
  -Variable names declared by let and var,
  -Constant names declared by const,
  -Property names of objects,
  -Function names,
  -Function parameters,
  -Class names

- functions that always return a boolean value are called predicates

- the code that invokes a function is called the 'caller'.

- global variables are accessible throughout the program and local variables are accessible within the functions and block they are defined in.

- primitive values are immutable. Methods invoked on primitive values always return a new value.

- function composition allow us to use functions as an argument of another function.

- function declarations:
<!-- can call function declarations before they are defined -->

```js
function functionName(zeroOrMoreArguments...) {
  // function body
}
```

- function expression:
<!-- cannot call function expressions before they are defined -->

```js
let greetPeople = function () {
  console.log("Good Morning!");
};

greetPeople();
```

- arrow functions:

```js
let add = (a, b) => a + b;
```

- JS functions are first-class-functions. They are objects that can be assigned to variables, passed around as arguments, returned from functions.

- we user conditionals to manage flow control. Flow control is the path we want our data to travel through our program.

- operands: `a` and `b` are operands and `===` is the operator.

```js
a === b;
```

- falsy values:
  false
  0: The ordinary zero value.
  -0: A negative zero.
  0n: The BigInt version of zero.
  An empty string ('')
  undefined
  null
  NaN

- Ternary operator is an expression and can therefore be assigned to a variable or passed in as an argument. `if/else` conditionals are statements and therefore cannot.

- JS objects include:

  simple objects, arrays, dates, functions

- Neither primitives or objects:

  1, variables and other identifiers such as function names
  2, statements such as if, return, try, while, and break
  3, keywords such as new, function, let, const, and class
  4, comments
  5, anything else that is neither data nor a function

- Prototypes

  Objects can inherit from other objects. When `a` inherits brom `b`, `b` is the prototype of `a` (prototype = parent).

- When JS creates storage within memory for a variable it will store the value of primitive values here with the address, but will only store the address (pointer) of all nonprimitive values whose values are stored in another location in storage.

- Exception handling

  The process of handling errors in a managable and predictable manner.

  'It uses the try/catch statement to catch exceptions that the code in the try block raises, and lets the programmer deal with the problem in a way that makes sense and perhaps prevents a catastrophic failure or nasty bug.' -LS

- Variable initializer

  The value on the right of the `=` operator when declaring a variable.

# Hoisting

- What is `var` and how does it differ from `let` and `const`

  `var` creates a property on the global object when a `var` variable is initialized outside of any function. `var` is function scoped where `let` is block scoped.

- What is hoisting?

  During the creation phase of a program execution JS will find all variable, function and class declarations and raise them to the top level of their respective scopes. This doesn't actually change to code but will merely act as if the code had been changed. This is why we can call functions before a function declaration.

- How do var, let, and const interact with hoisting? How do they differ?

  When `var` is hoisted any uninitialized variables are assigned `undefined`. `let` and `const` varibles that are uninitialized when hoisted remain unassigned and are left in a not defined state.

  ```JS
  console.log(bar); // undefined
  var bar = 3;
  console.log(bar); // 3

  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo;
  ```

  Such unset variables are said to be in the Temporal Dead Zone, or the TDZ.

- How do functions and classes interact with hoisting? How do they differ?
- What part does hoisting play in the way a specific program works?
- How does hoisting really work?
- Hoisting Practice
  https://launchschool.com/lessons/7cd4abf4/assignments/e0447820
  https://launchschool.com/lessons/7cd4abf4/assignments/1d43f233

- Function scope

  Refers to the entire file if outside of any function. Also, refered to as global scope but is a misnomer, should be called file scope or module scope.

  "At the top level of a program -- outside of any function -- function scope refers to the entire file. Some people use the term global scope to refer to function scope at the top level. Technically, that's a bit of a misnomer -- file scope or module scope would be better -- but most people talk about global scope, so we will too." -LS

# Closures

-What is a closure?
-What is in a closure?
-When is a closure created?
-What is the relationship between closures and scope?
-What do we mean when we say that closures are defined lexically?
-What is partial function application?
https://launchschool.com/lessons/7cd4abf4/assignments/0ea7c745
