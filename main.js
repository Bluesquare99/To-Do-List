let inputForm = document.getElementById('addItem');
let itemList = document.querySelector('ul');
let inputBar = document.querySelector('#inputBar');

// Submit event
inputForm.addEventListener('click', addItem);

// Add item
function addItem(e) {
    e.preventDefault();
    console.log ("Default Prevented");
    
    //New inputs
    let newItem = document.querySelector('#inputBar').value;
    console.log(newItem);

    //Create new li element
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    //Attach to list
    itemList.appendChild(li);

    //Reset text in search bar
    inputBar.value = "Next to do...";

    // Remove a list item when clicked upon 
    li.addEventListener("click", () =>
    itemList.removeChild(li))

}


