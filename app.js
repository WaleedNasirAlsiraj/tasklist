
function inputTask() {
    let emptyMsg = document.getElementById("emptymsg")
    // let li = document.getElementById("list")
    
    
    let task = document.getElementById("task").value
    if (task === ""){
        alert("Your task is empty. Please enter valid name. Thanks ")
    }else{
        emptyMsg.classList.add("hide")
        emptyMsg.classList.remove("no")
        
        let one = document.createElement("li")
        one.innerHTML = `<p id="list" class="h5">${task}</p>
        <img class="del" onClick="del(this)" src="/del.png" alt="delete">`
        document.getElementById("tasks").appendChild(one);
        document.getElementById("task").value= ""
    }
}

function del(link){
    link.parentNode.parentNode.removeChild(link.parentNode);
}

