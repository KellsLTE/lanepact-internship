let form = document.getElementById('addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector("#filter"); 

let removeItem = (e) => {
    if(e.target.classList.contains("delete")){
      if (confirm("Are you sure?")) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}


let addItem = (e) => {
    e.preventDefault();
    
    let newItem = document.querySelector("#item");

    let li  = document.createElement("li");

    li.className = "justify-content-between list-group-item d-flex";

    li.appendChild(document.createTextNode(newItem.value));
    
    let deleteBtn = document.createElement('button');

    deleteBtn.className = "btn btn-danger btn-sm delete";

    deleteBtn.appendChild(document.createTextNode("X"));

    li.appendChild(deleteBtn);
 
    itemList.appendChild(li);
}

let filterItems = (e) => {
    //convert to lowercase
    let text = e.target.value.toLowerCase();  
    
    //get items
    let items = itemList.getElementsByTagName('li'); 
    
    //convert to array
    Array.from(items).forEach(item => {
       let itemName = item.firstChild.textContent;
       if (itemName.toLowerCase().indexOf(text) != -1) {
           item.style.display = "block";
           console.log(item.style.display);
       }else{
           item.style.display = "none"; 
           console.log(item.style.display);
       }
    });
}
 
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);