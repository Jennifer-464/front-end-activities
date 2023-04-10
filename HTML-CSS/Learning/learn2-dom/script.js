/**
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 */

const elementNode = document.createElement("p"); // <p></p>
const textNode = document.createTextNode("Content here!"); // "Content here!"
const attributeNode = document.createAttribute("class"); // class=""

// can print each node

elementNode.appendChild(textNode); // <p> Content here! </p>
attributeNode.value = "some-class"; // class="some-class"
elementNode.setAttributeNode(attributeNode); // <p class="some-class"> Content here! </p>


// Will only appear once since element created outside of function
// if lines 1-9 were inside function, p would appear more and more for every click
const btn = document.querySelector("#my-btn");

btn.addEventListener("click", () => {
    document.body.appendChild(elementNode);
})


// Node type constants
// ELEMENT_NODE     nodeType 1      such as <p> <div> etc...
// ATTRIBUTE_NODE   nodeType 2      any attr of element
// TEXT_NODE        nodeType 3      actual text inside of elements / attributes
// COMMENT_NODE     nodeType 8      <!-- ... -->


const randomItemBtn = document.getElementById("random-list");

randomItemBtn.addEventListener("click", () => {
    const list = document.querySelector("ul");
    const getChildren = list.children; 

    const randomIndex = Math.floor(Math.random() * list.childElementCount);
    const randomListItem = getChildren.item(randomIndex); //list.children[2]
    
    alert(randomListItem.textContent);
})



const addItemBtn = document.getElementById("add-item");
var counter = 4;

addItemBtn.addEventListener("click", () =>{
    const elementNode = document.createElement("li");
    
    const listStr = "List Item #" +  counter;
    const textNode = document.createTextNode(listStr)
    
    elementNode.appendChild(textNode);
    
    const list = document.querySelector("ul");
    list.appendChild(elementNode);
    
    counter++;
})



const updateItemBtn = document.getElementById("update-item");
var counting = 1;

updateItemBtn.addEventListener("click", () => {
    const list = document.querySelector("ul"); // <ul>...</ul>
    
    const randomIndex = Math.floor(Math.random() * list.childElementCount);
    const randomListItem = list.children.item(randomIndex); //list.children[2]

    randomListItem.textContent = "You've updated the list " + counting +" times";
    if(counting == 1)
        randomListItem.textContent = "You've updated the list 1 time";
    
    counting++;
})



const deleteItemBtn = document.getElementById("delete-item");

deleteItemBtn.addEventListener("click", () => {
    const list = document.querySelector("ul"); // get list
    const getLastItemIndex = list.childElementCount - 1;

    if(getLastItemIndex == -1) {
        alert("No more items to delete");
    }
    else {
        const lastItem = list.children.item(getLastItemIndex); // get last item
        let garbage = list.removeChild(lastItem); // remove last item
    }
})



/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
 */
// inserting button title before buttons
// parent.insertBefore(newNode, referenceNode)

const parentBody = document.body;

const newTitle = document.createElement("h1");
newTitle.textContent = "Click on any Button";

const firstBtn = document.getElementById("my-btn");

parentBody.insertBefore(newTitle, firstBtn);
