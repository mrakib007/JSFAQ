function doSomething(){
    console.log(333);
}
console.log(111);

setTimeout(doSomething,5000);
console.log(222);
console.log(222);
console.log(222);
console.log(222);

// setTimeout(function(){
//    console.log('waiting');
// },4000)

setInterval(() => {
   console.log('doing it'); 
},1000 );
