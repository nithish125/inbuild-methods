const months = ['Jan', 'March', 'April', 'June'];
x=months.splice(1, 0, 'Feb');
console.log(months);
console.log(x)

months.splice(4, 1, 'May');
console.log(months);