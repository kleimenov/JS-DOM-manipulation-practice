//simple way how to set alert
//alert('Welcome to cat page!')
 
/*
Examples of how to define and invoke functions and DOM manipulation. 
For instance, I will define a couple of functions that add new headers, in different places.
*/
/*
//Here I defined function inline.
window.onload = function() {
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("Big cats");
    heading.appendChild(heading_text);
    document.body.appendChild(heading)

}
//Here I do the same thing, but for it, I define a variable and this variable denote function
let  createBigCats = function() {
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("Big cats II");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);

}
*/
//Here create function and further I will invoke this function 
function createBigCats() {
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("Big cats III");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
}
//Here I spot how to call two functions that were mentioned earlier
/*
window.onload(createBigCats());
window.onload(createBigCats());
*/

/*
Here I will do pretty much the same thing but little tricky. 
I am goin to add new element (header <h3>) into particular DOM element, 
in this case it will be <div> with class "topics-holder"
*/

//I define variable 
let newElementAdd = document.getElementsByClassName("topics-holder")[0];

//console.log(newElementAdd);

//Build a function that will execute the following code
function createBigCatsDiv() {
    const header = document.createElement("h2");
    const header_text = document.createTextNode("Big cats Here");
    header.prepend(header_text);
    newElementAdd.prepend(header);
}

//Here I will invoke these two functions
window.onload = function () {
    createBigCats();
    createBigCatsDiv();
};

//window.onload(createBigCatsDiv());


/*Let's explore query selectors. I will consider one method 
but other methods do pretty much the same thing with little differents
*/

//.querySelector - will return the header (it can be everything, not just header) with the id = interesting.

let h4Element = document.querySelector('#interesting');
h4Element.innerText = 'Interesting paragraph about cats';


//or I can do it like  this

document.querySelector('#interestingII').innerText = 'Another interesting paragraph about cats';



//Try to change text color for fun
document.getElementById('nice').style.color = 'magenta';


/*Let's play with code (fun part)
I will add <span> with text "Hot News" to each list element and set color red for this text
*/
//define new variable newsList.
let newsList = document.querySelectorAll('#news-list li');

//iterate over list and create new <span> element and add text into <span>
for (let i=0; i < newsList.length; i++) {
    let textNewsTag = document.createElement("span")
    let textNewsHeaderText = document.createTextNode("Hot News");
    textNewsTag.appendChild(textNewsHeaderText);
    newsList[i].appendChild(textNewsTag).style.color = "red";

}

