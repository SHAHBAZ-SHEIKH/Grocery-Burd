function addhandler() {
    var inputValue = document.getElementById("inputValue")
    var currentValue = inputValue.value
    let value2 = document.getElementById("value2")

    let divElement = document.createElement("div")
    divElement.classList.add('value')
    if(currentValue.trim() === ""){
        alert("please Enter a value")
    }
    else{
        divElement.innerHTML = `
    <div class="valueAnswer">
                        <input id="checkbox" type="checkbox" onclick="checkhandler(this)">
                        <p id="para">${currentValue}</p>
                    </div>
        
                    <div class="edit">
                        <i onclick="editHandler(this)" class="fa-regular fa-pen-to-square"></i>
                        <i onclick="deleteHanler(this)" class="fa-solid fa-trash"></i>
                    </div>
    `
    value2.appendChild(divElement)
    }

    

     inputValue.value ="";

}

function checkhandler(list) {


    if (list.nextElementSibling.style.textDecoration == "line-through") {
        list.nextElementSibling.style.textDecoration = "none";
    } else {
        list.nextElementSibling.style.textDecoration = "line-through";
    }
}


function deleteHanler(element) {
    
    let parentDiv = element.closest('.value');
    
    parentDiv.remove();
}

function editHandler(element) {
    let parentDiv = element.closest('.value');
    let para = parentDiv.querySelector('p');
    let currentText = para.innerText;

    let newText = prompt("Edit your task:", currentText);
    if (newText !== null && newText.trim() !== "") {
        para.innerText = newText;
    }
}