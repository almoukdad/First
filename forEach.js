// I try to view the differnce between for loop an forEach
//    arr.forEach(someFunction)

var colors=['red','green','blue','yellow'];

colors.forEach(function(){
	console.log('INSIDE THE FOREACH');
});


colors.forEach(function(iLoveDogs){
	console.log('INSIDE THE FOREACH' + iLoveDogs);
});

function printColor(color){
	console.log("*********");
	console.log(color);
	console.log("*********");
};
// printColor("purple")  => 


//now 
colors.forEach(printColor);
printColor(colors[1]);
printColor("green");