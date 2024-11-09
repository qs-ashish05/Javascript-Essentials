// example 01

console.log("Start of example - 01");
setTimeout(function(){
    console.log("Hello word")
}, 2000)
console.log("End of example - 01");


// example - 02

function simulataniousAyncOperations(callback) {
    setTimeout(function(){
        callback("Data from a simultanious synchronous operation");
    }, 2000)
}

console.log("Start of example - 02")

simulataniousAyncOperations(function(data){
    console.log("Data retrived", data);
})
console.log("End of example - 02")


// 