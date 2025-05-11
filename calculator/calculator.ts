import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query: string): Promise<string> {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  const num1 = parseFloat(await askQuestion('Enter first number: '));
  const op = await askQuestion('Enter operator (+ - * /): ');
  const num2 = parseFloat(await askQuestion('Enter second number: '));

  let result: number;

  switch (op) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num2 !== 0 ? num1 / num2 : NaN; break;
    default: console.log('Invalid operator'); rl.close(); return;
  }

  console.log(`Result: ${result}`);
  rl.close();
}

main();
