let a = 153;
let s = 0;
let c;
let armst=a;
while (a > 0) {
    reminder = a % 10;
    c = reminder ** 3;
    s = s + c;
    a = a - reminder;
    a = a / 10;
    
}
if(armst==s){
    console.log(+armst+":  is  armstrong number");
}
else{
console.log(+armst+":  is  not armstrong number");
}