const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? ", function(input){
	console.log(input);
	const tokens = input.split(' ');
	console.log(tokens)
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

	if(mathSymbol === "+"){
		console.log(num1 + num2)
	}
	else if(mathSymbol === "-"){
		console.log(num1 - num2)
	}
	else if(mathSymbol === "*"){
		console.log(num1 * num2)
	}
	else if(mathSymbol === "/"){
		console.log(num1 / num2)
	}
	else if(mathSymbol === "√"){
		console.log(Math.sqrt(num1))
	}
	reader.close()

});
