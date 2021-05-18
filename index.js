
/* Recursion Function */
const fact = (n) => {
    if(n===0){
        return 1 ;
    }else{
        return  n * fact(n-1)
    }

}

console.log(fact(5))


/*Closures */
function newCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
const nc = newCounter();

console.log(nc());
console.log(nc());
console.log(nc());