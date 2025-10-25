// JavaScript Data Types - Enhanced Examples & Explanations

// 1. Number
let num = 10; // integer
let floatNum = 3.14; // floating point
console.log('num:', num, '| type:', typeof num);
console.log('floatNum:', floatNum, '| type:', typeof floatNum);

// 2. String
let str1 = "arpit";
let str2 = 'hello world';
console.log('str1:', str1, '| type:', typeof str1);
console.log('str2:', str2, '| type:', typeof str2);

// 3. Boolean
let isActive = true;
let isLoggedIn = false;
console.log('isActive:', isActive, '| type:', typeof isActive);
console.log('isLoggedIn:', isLoggedIn, '| type:', typeof isLoggedIn);

// 4. Undefined
let account; // declared but not assigned
console.log('account:', account, '| type:', typeof account);

// 5. Null
let balance = null; // explicitly nothing
console.log('balance:', balance, '| type:', typeof balance);
// Example: If a bank server is down, it may return null (not zero) to indicate data is unavailable

// Note: typeof null returns 'object' (this is a historical bug in JS)
let balance1 = null;
console.log('typeof balance1 (null):', typeof balance1); // 'object'

// 6. BigInt
let bigNumber = 1234567890123456789012345678901234567890n; // add 'n' at end
console.log('bigNumber:', bigNumber, '| type:', typeof bigNumber);

// 7. Symbol
let uniqueId = Symbol('id');
console.log('uniqueId:', uniqueId, '| type:', typeof uniqueId);

// Extra: typeof keyword helps to find the type of any variable
let account_balance = 30;
console.log('account_balance:', account_balance, '| type:', typeof account_balance);

