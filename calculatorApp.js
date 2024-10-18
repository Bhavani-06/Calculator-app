function performArithmeticOperations(num1, num2) {
    const sum = num1 + num2;
    const product = num1 * num2;
    const difference = num1 - num2;
    const remainder = num1 % num2;

    console.log(`Sum: ${sum}`);
    console.log(`Product: ${product}`);
    console.log(`Difference: ${difference}`);
    console.log(`Remainder: ${remainder}`);
}

const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");

performArithmeticOperations(Number(num1), Number(num2));
