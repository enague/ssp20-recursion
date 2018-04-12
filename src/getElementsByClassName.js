// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,node) {
	//create a convenience array literal for results
	var results= [];
	// if has a specified node, use that. Otherwise, use the whole document as reference
	node= node || document.body;

	//search the live list and see if any nodes contain the className
	if (node.classList) {
		if(node.classList.contains(className)) {
			//if they contain the className, push into results array
			results.push(node)
		}
	}
	//check to see if children nodes have the className
	// iterate through the child nodes using a for loop for total number of children nodes
	for (var i=0; i < node.children.length; i++) {
		//store value if it contains className for the children node
		var child= getElementsByClassName(className,node.children[i])
		//use concat to individually add each child node as for loop iterates
		results= results.concat(child)
	}
	//return results
	return results;
}
