//Arithmatic Operations in Javascript
let num1 = 10;
let num2 = 20;
let sum = num1 +num2;
var x=45;
var y=70;
const z=55;

console.log(x+y);
console.log("sum:-"+sum);

//print numbers from 1 to 10

console.log(" 1 to 10 numbers");
for( i=1;i<11;i++){
	console.log(i);
}


//print only the odd numbers

console.log(" odd numbers");
for( i=1;i<11;i++){
	if(i%2!=0){
		
		console.log(i);
	}
	
}

//print the numbers in reverse

console.log(" revers 1 to 10 numbers");
for( i=10;i>0;i--){
	console.log(i);
}

//reverse the numbers in left and right 4321-5-9876

console.log(" reverse the numbers in left and right 4321-5-9876");
let str = "4321-5-9876";
let left = "", middle = "", right = "";
let dash = 0;

for(let i = 0; i < str.length; i++){
	if(str[i] == "-"){
		dash++;
	}
	else if(dash == 0){
		left = str[i] +left;
	}
	else if(dash == 1){
		middle = str[i];
	}
	else{
		right = str[i] + right;
	}
}

let result = left + "-" + middle + "-" + right;
console.log(result);  
