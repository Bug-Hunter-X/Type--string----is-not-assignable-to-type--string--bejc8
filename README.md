# Type 'string[]' is not assignable to type 'string' in TypeScript
This repository demonstrates a common TypeScript error: Argument of type 'string[]' is not assignable to parameter of type 'string'.  The example shows how to handle an array of strings when a function expects a single string.

## Problem

A function `greeter` is defined that expects a single string argument.  However, when calling the function, an array of strings is passed in. This causes a TypeScript type error.