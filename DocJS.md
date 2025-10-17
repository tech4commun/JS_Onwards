# JavaScript Fundamentals - Quick Reference

## Table of Contents
1. [Introduction to JavaScript](#introduction-to-javascript)
2. [JavaScript Engine & Runtime](#javascript-engine--runtime)
3. [Variable Declarations](#variable-declarations)
4. [Console Methods](#console-methods)

---

## Introduction to JavaScript

**JavaScript** is a high-level, interpreted programming language that enables interactive web pages and is an essential part of web applications.

### Key Characteristics:
- **Dynamic typing**: Variables can hold any type of value
- **Interpreted**: Executed line-by-line at runtime
- **Multi-paradigm**: Supports procedural, object-oriented, and functional programming

### The Web Trinity:
```
HTML  → Structure (Skeleton)
CSS   → Presentation (Styling)
JS    → Behavior (Brain/Logic)
```

---

## JavaScript Engine & Runtime

### JavaScript Engines
JavaScript engines compile and execute JavaScript code. Popular engines include:

| Engine | Browser/Platform | Developer |
|--------|-----------------|-----------|
| **V8** | Chrome, Node.js | Google |
| **SpiderMonkey** | Firefox | Mozilla |
| **JavaScriptCore** | Safari | Apple |

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

JavaScript provides three ways to declare variables: `let`, `const`, and `var`.

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

---

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

---

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
- **Avoid in modern JavaScript** (use `let` instead)

**Problems with `var`:**
- Hoisting issues
- No block scope
- Can lead to unexpected behavior

---

### Variable Declaration Comparison

| Feature | `let` | `const` | `var` |
|---------|-------|---------|-------|
| Reassignment | ✓ Yes | ✗ No | ✓ Yes |
| Scope | Block | Block | Function |
| Hoisting | Yes (TDZ) | Yes (TDZ) | Yes |
| Redeclaration | ✗ No | ✗ No | ✓ Yes |
| Modern Use | ✓ Yes | ✓ Yes | ✗ Avoid |

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

## Console Methods

The `console` object provides access to the browser's debugging console.

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
✓ Console output using `console.log()`  

### Next Steps to Explore:
- Data types (String, Number, Boolean, etc.)
- Operators (Arithmetic, Comparison, Logical)
- Control structures (if-else, loops)
- Functions
- Objects and Arrays

---

## Standards & ECMAScript

JavaScript is standardized by **ECMAScript (ES)**. Major versions include:
- ES5 (2009)
- ES6/ES2015 (Major update)
- ES2016, ES2017, ES2018... (Yearly updates)

Modern JavaScript typically refers to ES6 and beyond.

---

*Last Updated: Day 001*