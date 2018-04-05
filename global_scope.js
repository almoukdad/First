//======================================example for Global and Local scope  (Colt Steele)

var num = 8;
function doMath(){
	num+=1;			// now, num = 9 (because it declared in global) and when we call it inside the function increment by 1
	if(num%5===0){
		return true;
	}else {
		return false;
	}
}

num +=1 		// now , in this line "before invoke the function" also increment by 1

doMath()
