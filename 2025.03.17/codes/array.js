//Array
let myarray =[1,2,3,7,4]
/*for(i=0;i<myarray.length;i++){
	
console.log(myarray[i])
}


console.log(myarray);
*/

myarray.forEach((n)=>{
	console.log(n);
})
console.log("..............................");
//find the max number in the array using foreach 
console.log("Max number of array ");
let max=0;
myarray.forEach((n)=>{
	
	if(max<n){
		max=n;
	}
	
})

console.log("Max is "+max)


//print the nested array
//[[1,2,30],[5,6],[8,5,3]]

/*let arr[3][3]={[1,2,30],[5,6,1],[8,5,3]}
for(let i=0;i<3;i++){
	for(let j=0;j<3;j++){
		console.log(arr[i][j]);
}}
*/
console.log("..............................");
let arr2 = [[1,2,30],[5,6],[8,5,3]]
arr2.forEach((n)=>{
	n.forEach((i)=>{
		console.log(i)
	}
)
}
)

/* a=[4,5,6,3,7]
b=[8,3,2,1,5]

find the common element between a and b*/
console.log("..............................");
console.log("Common element between array A and array B");
let arra = [4,5,6,3,7];
let arrb=[8,3,2,1,5];
for(let i=0;i<arra.length;i++){
	for(let j=0;j<arrb.length;j++){
		if(arra[i]==arrb[j]){
			console.log(arra[i]);
		}
		
	}
}
console.log("..............................");	

//write a code find the  all pairs that sum up to the target
//arr =[1,2,3,4,5,6]
//target =7

console.log("All the pair in sum up to the target 7");
let arr=[1,2,3,4,5,6];

for(let i=0;i<arr.length;i++){
	for(let j=0;j<arr.length-1;j++){
		if(arr[i]+arr[j+1]==7){
		console.log(arr[i]+","+arr[j+1]);
		
		}
	}
}

console.log("..............................");			
			

/*[4,8,3,4,3,2,1,8,4]
Find  the most frequent element in the array*/

console.log("Most frequent element in the array");

let array = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let frequency = {};
let maxCount = 0;
let mostFrequentElement;

array.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequentElement = num;
    }
});

console.log("Most frequent element:", mostFrequentElement);






console.log("..............................");		
//Array operation
//push and pop

console.log("Push and Pop");		
arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)


console.log("..............................");		
//reverse the array using push and pop
//a b c d -> d c b a 

console.log("Reverse the array using push and pop");
arr4 = ['a', 'b', 'c', 'd']
reverse_array=[]
console.log(arr4)

while(arr4.length>0){	
reverse_array.push(arr4.pop())
}

console.log(reverse_array)




