function changeColor(newColor) {
	var example = document.getElementById("choosewisely");
	example.style.color = newColor;
}

function findReplace() {

	//grab the original text
	var txt = document.getElementById("find-replace").innerHTML;

	//grab the words to find/replace
	var findWord = document.getElementById("textFind").value;
	var replaceWord = document.getElementById("textReplace").value;

	//create a new regex object to use to search for findWord
	//include the g and i modifiers: g is for global, i is for case insensitive
	var re = new RegExp(findWord, "gi");

	//find and replace words in original text using the regex we created
	var newText = txt.replace(re, replaceWord);

	//output the new text to the page
	document.getElementById("find-replace").innerHTML = newText;
}






