let input = document.querySelector("#input-box");
let listContainer = document.querySelector(".list-container");

function addTodo() {
    if (input.value === "") alert("You have to write something!!")
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();




