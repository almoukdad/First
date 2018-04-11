//==== Movies Database ==

var movies=[						// it's a small sample of DB
	{
		title:"In Bruges",
		hasWatched:true,
		rating:5
	},
	{
		title:"Frozen",
		hasWatched:false,
		rating:4.5
	},
	{
		title:"Titanic",
		hasWatched: true,
		rating: 4.8
	}
]

movies.forEach(function(movie){		// try for loop !
var results = "You Have ";
	if(movie.hasWatched){
		results+= "Watched";
	} else{
		results+= "Not Seen";
	}
	results += " '" + movie.title + "' - " + movie.rating + " Stars";
	alert(results);
	
})
// I can pass the conditional statements inside a function and then invoke that 
// function fron inside the forEach loop !
// Let's see ..
function buildString(movie){
	var results = "You Have ";
	if(movie.hasWatched){
		results+= "Watched";
	} else{
		results+= "Not Seen";
	}
	results += " '" + movie.title + "' - " + movie.rating + " Stars";
	return results;
}

// let's write the same forEach with invoking the function 

movies.forEach(function(movie){			// You can pass for loop in side the function 
	console.log(buildString(movie));
});
