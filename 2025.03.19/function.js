//Function
function Printmsg(){
	console.log("Hello JS")
}
Printmsg()

function sum(){
	return 5+6
}
console.log(sum())


function sub(a,b){
	return a-b
}
console.log(sub(7,4))
console.log("......................................................")

//write a boolean function to find a given number is prime


console.log("Boolean function to find a given number is prime")

function isPrime(number) {
    if (number < 2) return false; 

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 
}


let number = 6;
if (isPrime(number)) {
    console.log(number + " is a prime number");
} else {
    console.log(number + " is not a prime number");
}

console.log("......................................................")

//Write recursive function to print number from 1 to name

console.log("Write recursive function to print number from 1 to name")
let num=1
let n=5
function recursive(){
	
	console.log(num)
	
	if(num!=n){
	num=num+1
	recursive()
		
	}
}
recursive()
console.log("......................................................")


//arrow function
console.log("Arrow function")
const msg =()=>
{return console.log("Hello js")}


msg()
console.log("......................................................")
//Write an arrow function to sum 2 numbers 
console.log("An arrow function to sum 2 numbers ")
const add=(a,b)=>
{return a+b}
console.log(add(4,5))
console.log("......................................................")


//Default parameter
console.log("Default parameter")

const mul=(a,b=2)=>
{return a*b}
console.log(mul(4,5))
console.log(mul(4))	
console.log("......................................................")


//Rest parameter

console.log("Rest parameter")
const mysum=(...n)=>{
	
	let t=0
	n.forEach((i)=>{
		
	t=t+i
	})
	
	
	console.log("total :"+t)
}

mysum(1,2,3,4)

const mysum1 = (...n)=>{
	return n.reduce((t,i)=>t=t+i)
}

console.log(mysum1(4,5,100))
console.log("......................................................")


//callback function 
//a function passes as an argument

console.log("callback function ") 
const myName = (name)=>{console.log("My name is "+name)}

const greet =(msg,fun)=>{
	console.log("Hi.."+msg)
	fun()
}

greet("Good morning",()=>{console.log("myName is David")})




const multtwo = (n)=>n*2

const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}

myarr(multtwo,4,5,6,8,2)




