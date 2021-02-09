var name = 'rakib';
function add(num1,num2){
    noVariable = 10;
    var result = num1 + num2;
    // window.result = num1+num2;
    console.log('name inside',name);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
   
}
console.log('name outside',name);
var sum = add(12,31);
console.log(sum);
console.log(noVariable);