types of data 
## JavaScript (JS) - Notes & Concepts

JavaScript is a **programming language** that brings interactivity and logic to websites.

---

### Why Do We Need JavaScript?

**Q:** Can we create a calculator website using only HTML and CSS?

**A:** No. HTML & CSS can only create the structure and design. They cannot perform calculations or logic because they are not programming languages.

**JavaScript adds the "brain" to a website:**
- Allows us to manipulate HTML and CSS dynamically
- Enables interactivity (e.g., clicking a button changes text or style)

---

### Interesting Facts about JavaScript
- Developed in just **10 days**
- Browsers understand only three things: **HTML, CSS, JS**
- Chrome uses the **V8 engine** to interpret JS code

---

### The Story of JavaScript

**1995:** Netscape (a popular browser) wanted to make websites lively. Brendan Eich developed JavaScript in just 10 days.

- JavaScript was free and made websites interactive, leading to its rapid adoption.
- Microsoft created Internet Explorer and introduced their own version called **JScript** (also free).
- Developers faced compatibility issues: two similar but different languages (JS by Netscape, JScript by Microsoft).
- Netscape approached **ECMA** (a standards organization) to standardize JavaScript (leading to versions like ES6, ES7, ES9, etc.).
- Netscape dissolved due to funding issues, but made their browser code open source.
- **Mozilla** was formed, took the code, and launched **Mozilla Firefox** (open source).
- **Google Chrome** launched with the fast **V8 engine** (made JS much faster than before).
- Other browsers: Safari (Apple), Firefox (Mozilla), Chrome (Google)
- Mozilla later developed the **SpiderMonkey** JS engine.

---

### What is a JS Engine?
- Converts JavaScript code to machine code (so computers can understand it)
- Major JS engines are written in C++ (about 70%)
- Examples: V8 (Chrome), SpiderMonkey (Mozilla)

---

### Running JavaScript

**In the browser:**
```javascript
console.log("Hello from the browser!");
```

**Outside the browser (using Node.js):**
```bash
node "d:\JS_Onwards\Day001\Brain.js"
# Output:
hello
```

> **Node.js** = V8 engine + extra functionality for running JS outside browsers (e.g., in VS Code)
> - LTS = Long Term Support version of Node.js
> - Node.js allows JS to be used for backend development

---

### Storing Data in JavaScript

We use **variables** to store data. There are three ways to declare variables:
- `let` (block-scoped, can be changed)
- `const` (block-scoped, cannot be changed)
- `var` (function-scoped, old way)

---

### Data Types in JavaScript

There are **7 primitive data types**:
1. **Number** (whole numbers & floats)
2. **String** (text)
3. **Boolean** (`true` or `false`)
4. **BigInt** (for very large numbers)
5. **Null** (intentional absence of value)
6. **Undefined** (variable declared but not assigned)
7. **Symbol** (unique identifiers)

**Example:**
```javascript
let num = 10; // Number
let name = "Arpit"; // String
let isActive = true; // Boolean
let bigNumber = 12345678901234567890n; // BigInt (note the 'n' at the end)
let nothing = null; // Null
let notAssigned; // Undefined
let uniqueId = Symbol("id"); // Symbol
```

#### Why do we need BigInt?
- Regular numbers in JS are stored in 64 bits (binary)
- If a number is too large for 64 bits, it loses precision (memory loss)
- **BigInt** allows us to store much larger numbers (add `n` at the end)

---

### How 64-bit Numbers Work (Simplified)

- For a 3-bit number: Largest value is $2^{3-1} - 1$ (because 1 bit is for the sign)
- Smallest value is negative equivalent
- Zero can be represented in two ways:
  - `000` (positive zero)
  - `100` (negative zero, MSB is sign bit)

---

### Summary

- JavaScript brings logic and interactivity to web pages
- It runs in browsers (via JS engines) and outside browsers (via Node.js)
- Variables and data types are fundamental concepts
- Understanding how numbers and memory work helps avoid bugs

---

**Keep practicing JS basics to build a strong foundation!**





