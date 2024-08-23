// Task 1
const boolLiteral = true;
const boolConstructor = Boolean(false);
const numLiteral = 123;
const numConstructor = Number("456");
const bigIntLiteral = 123456789012345678901234567890n;
const bigIntConstructor = BigInt("123456789012345678901234567890");
const strLiteral = "Hello, World!";
const strConstructor = String(42);
let undefVariable;

// Task 2
console.log(`${boolLiteral} [${typeof boolLiteral}]`);
console.log(`${boolConstructor} [${typeof boolConstructor}]`);
console.log(`${numLiteral} [${typeof numLiteral}]`);
console.log(`${numConstructor} [${typeof numConstructor}]`);
console.log(`${bigIntLiteral} [${typeof bigIntLiteral}]`);
console.log(`${bigIntConstructor} [${typeof bigIntConstructor}]`);
console.log(`${strLiteral} [${typeof strLiteral}]`);
console.log(`${strConstructor} [${typeof strConstructor}]`);
console.log(`${undefVariable} [${typeof undefVariable}]`);

// Task 3 
const strValue = "1234";
const numberValue = Number(strValue); // Convert String to Number
const bigIntValue = BigInt(numberValue); // Convert Number to BigInt
const boolValue = Boolean(bigIntValue); // Convert BigInt to Boolean

console.log(`Converted Boolean: ${boolValue} [${typeof boolValue}]`);

// Task 4
const boolSum = true + false;
console.log(`${boolSum} [${typeof boolSum}]`);
const numSum = 10 + 20;
console.log(`${numSum} [${typeof numSum}]`);
const bigIntSum = 123456789012345678901234567890n + 98765432109876543210987654321n;
console.log(`${bigIntSum} [${typeof bigIntSum}]`);
const strSum = "Hello, " + "World!";
console.log(`${strSum} [${typeof strSum}]`);
const undefinedSum = undefined + undefined;
console.log(`${undefinedSum} [${typeof undefinedSum}]`);

// Task 5
const mixedSum1 = 42 + "1"; 
console.log(`${mixedSum1} [${typeof mixedSum1}]`);

// Task 6
const fixedSum = 42 + Number("1"); 
console.log(`${fixedSum} [${typeof fixedSum}]`); 
