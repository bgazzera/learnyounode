// console.log(process.argv.length);
// console.log(process.argv);

var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
    //console.log(process.argv[i]);
    sum = sum + Number(process.argv[i]);
    //console.log(sum);
};
console.log(sum);