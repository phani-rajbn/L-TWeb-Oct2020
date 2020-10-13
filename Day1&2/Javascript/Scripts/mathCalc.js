//mathCalc.js
//This is a JS file that will be included inside  the HTML Docs who consume these functions. JS files are created for those functions which will be used across multiple HTML Documents of the website. 
function addFunc(v1, v2){
	return v1 + v2;
}

function subFunc(v1, v2) {
	return v1 - v2;
}

function mulFunc(v1, v2){
	return v1 * v2;
}
function divFunc(v1, v2){
	return v1 / v2;
}
function sqrFunc(v1){
	return mulFunc(v1, v1);
}
//Math is a builtIn component of JS that is used to invoke math functions like sin, cos, tan, abs, sqrt and many more. Refer the Mozilla Documentation for JS based functions.....
function sqrtFunc(v1){
	return Math.sqrt(v1);
}

function performOperation(v1, v2, operation){
	switch(operation){
		case "Add":
			return addFunc(v1, v2);
		case "Subtract":
			return subFunc(v1, v2);
		case "Multiply":
			return mulFunc(v1, v2);
		case "Divide":
			return divFunc(v1, v2);
		case "Square":
			return sqrFunc(v1);
		case "SquareRoot":
			return sqrtFunc(v1);
		default:
			alert("Invalid Operation");
			break;

	}
}