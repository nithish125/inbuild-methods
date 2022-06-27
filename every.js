age=[13,32,34,19]
function checkage(age){
    return age>18;
}
x=age.every(checkage)
console.log(x);
//false
console.log(age);
//(4) [13, 32, 34, 19]