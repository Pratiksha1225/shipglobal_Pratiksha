const todoValue = document.getElementById("todoText");


 const initialTodos = ["Task 1", "Task 2", "Task 3","Task"];


document.addEventListener("DOMContentLoaded", function () {
  

    const backlogList = document.getElementById("backlog-list");

    initialTodos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo;
        backlogList.appendChild(li);
    });
});

function moveToNext(current, next) {
    const currentList = document.getElementById(`${current}-list`);
    const nextList = document.getElementById(`${next}-list`);

    if (currentList.children.length > 0) {
        const todo = currentList.children[0];
        nextList.appendChild(todo);
    }
}

function moveToPrev(current, prev) {
    const currentList = document.getElementById(`${current}-list`);
    const prevList = document.getElementById(`${prev}-list`);

    if (currentList.children.length > 0) {
        const todo = currentList.children[0];
        prevList.appendChild(todo);
    }
}
