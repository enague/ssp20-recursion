// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {

	//stringify undefined or function
	if (obj=== undefined || typeof obj === 'function') {
		return;
	}

	//stringify null
	if(obj === null) {
		return "null";
	}


	// stringify a string
	if (typeof obj === 'string') {
		return '"'+ obj + '"';
	}
	
	//stringify an array
	if(Array.isArray(obj)) {
		//case if array has elements in it
		if (obj.length) {
			var str= [];

		//iterate through obj and stringify elements in the obj
		obj.forEach( function(i) {
			str.push(stringifyJSON(i));
		})

		return '[' + str.join(",") +']';

		} else {
		//case where arrray has nothing in it
		return '[]';
		}
		
	}

	// stringify an object
	if (typeof obj === 'object') {


	var keys= Object.keys(obj);


		if(keys.length) {
			
			var str='';
			for ( var i= 0; i< keys.length; i++) {
				var key= keys[i];

				if (!key || obj[key]=== undefined || typeof key === 'function' || typeof obj[key]=== 'function') {
					
				} else {

					if( i=== keys.length-1) {
						str += stringifyJSON(key)+ ':' + stringifyJSON(obj[key]);
					} else {
					str += stringifyJSON(key) + ':' +stringifyJSON(obj[key])+ ',';
						}
					}
			}
				
				return '{' + str + '}';


		} else {

			return '{}';

			}

	}


	return obj.toString();


	};