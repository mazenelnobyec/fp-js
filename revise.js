
/* Recursion Function */
const fact = (n) => {
    if(n === 0){
        return 1 ;
    }else{
        return  n * fact(n-1)
    }

}

const upFact = (n,f=1) => {
   
   return f === n+1 ? 1 : f * upFact(n,f+1)

}


const checkSign = (n) =>{
  return n < 0 ? 0 : n  
}

console.log(fact(checkSign(-5)));
console.log(fact(checkSign(0)));
console.log(fact(checkSign(5)));
console.log(upFact(checkSign(5)));

/*Closures */
function newCounter() {
    let count = 0;
    return () => ++count;
}
const nc = newCounter();

console.log(nc());
console.log(nc());
console.log(nc());