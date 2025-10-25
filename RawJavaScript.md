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
