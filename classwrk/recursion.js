// function sumRange(n){
//  if(n == 1){
//     return 1;
//  }
//  else {
//     return  n + sumRange(n - 1)   
//  }
// }

// console.log(sumRange(7))

// function power(base,exp){
//     if(exp == 0){
//         return 1
//     }
//     else {
//         return base * power(base, exp - 1);
//     }
// }

// console.log(power(2,3));

// function factorial(num){
//     if(num == 1) {
//         return 1;
//     }
//     else {
//         return num * factorial(num - 1);
//     }

// }

// console.log(factorial(10));

// function all(arr,callback){
//     if()
// }


function productOfArray(array){
	if(array.length === 0) return 1;

	return array.shift() * productOfArray(array);
	
}

console.log(productOfArray([4,3,2]));
