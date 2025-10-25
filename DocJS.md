# JavaScript Fundamentals - Quick Reference

# JavaScript Fundamentals - Quick Reference

## Table of Contents
1. [Introduction to JavaScript](#introduction-to-javascript)
2. [JavaScript Engine & Runtime](#javascript-engine--runtime)
3. [Variable Declarations](#variable-declarations)
4. [Console Methods](#console-methods)

1. [Introduction to JavaScript](#introduction-to-javascript)
2. [JavaScript Engine & Runtime](#javascript-engine--runtime)
3. [Variable Declarations](#variable-declarations)
4. [Data Types](#data-types)
5. [Console Methods](#console-methods)

---

## Introduction to JavaScript

## Introduction to JavaScript

**JavaScript** is a high-level, interpreted programming language that enables interactive web pages and is an essential part of web applications. It is standardized by [ECMAScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources) (ES).

### Key Characteristics (per [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)):
- **Dynamic typing**: Variables can hold any type of value
- **Interpreted**: Executed line-by-line at runtime
- **Multi-paradigm**: Supports procedural, object-oriented, and functional programming
- **Prototype-based**: Inheritance is achieved via prototypes
- **First-class functions**: Functions are treated as values

### The Web Trinity:
```
HTML  → Structure (Skeleton)
CSS   → Presentation (Styling)
JS    → Behavior (Brain/Logic)
```

---

## JavaScript Engine & Runtime

## JavaScript Engine & Runtime

### JavaScript Engines
JavaScript engines parse, compile, and execute JavaScript code. Major engines include:

| Engine           | Browser/Platform   | Developer |
|------------------|-------------------|-----------|
| **V8**           | Chrome, Node.js   | Google    |
| **SpiderMonkey** | Firefox           | Mozilla   |
| **JavaScriptCore** | Safari           | Apple     |

#### How Engines Work
- Convert JS code to machine code (just-in-time compilation)
- Most are written in C++

### Node.js
**Node.js** = V8 Engine + Additional APIs (File System, HTTP, etc.)
- Allows JavaScript to run outside the browser
- Enables server-side JavaScript development
- Built on Chrome's V8 JavaScript engine

**Running JavaScript:**
```bash
# In browser: Use developer console (F12)
# In Node.js:
node filename.js
```

---

## Variable Declarations

## Variable Declarations

JavaScript provides three ways to declare variables: `let`, `const`, and `var` ([MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)).

### 1. `let` - Block-Scoped Variable
```javascript
let num = 10;
num = 20;  // ✓ Reassignment allowed
console.log(num);  // Output: 20
```
**Characteristics:**
- Mutable (can be reassigned)
- Block-scoped (`{}`)
- Cannot be redeclared in the same scope
- **Modern and recommended**

### 2. `const` - Block-Scoped Constant
```javascript
const ids = 0.999999;
console.log(ids);  // Output: 0.999999
// ids = 30;  // ✗ TypeError: Assignment to constant variable
```
**Characteristics:**
- Immutable binding (cannot be reassigned)
- Block-scoped (`{}`)
- Must be initialized at declaration
- **Use by default unless reassignment is needed**

### 3. `var` - Function-Scoped Variable (Legacy)
```javascript
var a = 30;
a = 40;  // ✓ Reassignment allowed
console.log(a);  // Output: 40
```
**Characteristics:**
- Mutable (can be reassigned)
- Function-scoped (not block-scoped)
- Can be redeclared
- **Avoid in modern JavaScript** (use `let` or `const` instead)

**Problems with `var`:**
- Hoisting issues
- No block scope
- Can lead to unexpected behavior

### Variable Declaration Comparison
| Feature        | `let` | `const` | `var` |
|---------------|-------|---------|-------|
| Reassignment  | ✓ Yes | ✗ No    | ✓ Yes |
| Scope         | Block | Block   | Function |
| Hoisting      | Yes (TDZ) | Yes (TDZ) | Yes |
| Redeclaration | ✗ No  | ✗ No    | ✓ Yes |
| Modern Use    | ✓ Yes | ✓ Yes   | ✗ Avoid |

**Best Practice:**
```javascript
// Default to const
const PI = 3.14159;
// Use let only when reassignment is needed
let counter = 0;
counter++;
// Avoid var in modern JavaScript
```

---

## Data Types

JavaScript has **7 primitive data types** ([MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values)):

1. **Number**: Represents both integer and floating-point numbers.
	```javascript
	let num = 42;
	let floatNum = 3.14;
	console.log(typeof num); // 'number'
	```
2. **String**: Sequence of characters.
	```javascript
	let name = "Arpit";
	console.log(typeof name); // 'string'
	```
3. **Boolean**: Logical entity, `true` or `false`.
	```javascript
	let isActive = true;
	console.log(typeof isActive); // 'boolean'
	```
4. **BigInt**: For arbitrarily large integers (add `n` at the end).
	```javascript
	let bigNumber = 12345678901234567890n;
	console.log(typeof bigNumber); // 'bigint'
	```
5. **Null**: Intentional absence of value.
	```javascript
	let nothing = null;
	console.log(typeof nothing); // 'object' (legacy bug)
	```
6. **Undefined**: Variable declared but not assigned.
	```javascript
	let notAssigned;
	console.log(typeof notAssigned); // 'undefined'
	```
7. **Symbol**: Unique and immutable identifier.
	```javascript
	let uniqueId = Symbol("id");
	console.log(typeof uniqueId); // 'symbol'
	```

#### Why BigInt?
- Regular numbers are stored in 64 bits (binary)
- If a number exceeds this, it loses precision
- **BigInt** allows storage of much larger numbers (add `n` at the end)

#### How 64-bit Numbers Work (Simplified)
- For a 3-bit number: Largest value is $2^{3-1} - 1$ (because 1 bit is for the sign)
- Zero can be represented as `000` (positive zero) or `100` (negative zero, MSB is sign bit)

---

---

## Console Methods

The `console` object provides access to the browser's debugging console ([MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/console)).

### `console.log()`
Outputs a message to the console.
```javascript
console.log("Hello, World!");  // Output: Hello, World!
let name = "Arpit";
console.log(name);  // Output: Arpit
// Multiple values
console.log("Name:", name, "Age:", 25);
```
**Common Use Cases:**
- Debugging
- Testing variable values
- Tracking program flow

---

## Quick Reference: What You've Learned

### Concepts Covered:
✓ JavaScript basics and its role in web development  
✓ JavaScript engines (V8, SpiderMonkey)  
✓ Node.js and running JavaScript outside the browser  
✓ Variable declarations: `let`, `const`, `var`  
✓ Mutability vs Immutability  
✓ Data types: Number, String, Boolean, BigInt, Null, Undefined, Symbol  
✓ Console output using `console.log()`  

### Next Steps to Explore:
- Operators (Arithmetic, Comparison, Logical)
- Control structures (if-else, loops)
- Functions
- Objects and Arrays

---

## Standards & ECMAScript

## Standards & ECMAScript

JavaScript is standardized by **ECMAScript (ES)** ([ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)). Major versions include:
- ES5 (2009)
- ES6/ES2015 (Major update)
- ES2016, ES2017, ES2018... (Yearly updates)

Modern JavaScript typically refers to ES6 and beyond.

---

*Last Updated: Day 002*