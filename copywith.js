const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(0, 3, 4));
//5) ['d', 'b', 'c', 'd', 'e']
console.log(array1.copyWithin(1, 3));
['d', 'd', 'e', 'd', 'e']
x=array1.copyWithin(0, 3, 4);

console.log(x);
//['d', 'd', 'e', 'd', 'e']
