document.querySelector('#new-task-button').onclick = function () {
    if (document.querySelector('#new-task-section input').value.length == 0) {
        alert("Please Enter a Task")
    } else {
        let uniqueID = () => {
        let idCreator = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
    
        return idCreator() + idCreator() + '-' + idCreator() + '-' + idCreator() + '-' + idCreator() + '-' + idCreator() + idCreator() + idCreator();
        }

        document.querySelector('#current-tasks').innerHTML += `
                <li id="${uniqueID()}">
                    <div class="task">
                        <input type="checkbox">
                        <label id="task-name" data-content="${document.querySelector('#new-task-section input').value}">${document.querySelector('#new-task-section input').value}</label>
                    </div>

                    <button id="delete-task" class="delete-task">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"/></svg>
                    </button>
                </li>
        `;

        var current_tasks = document.querySelectorAll(".delete-task");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                const tasks = document.getElementById('current-tasks').getElementsByTagName('li');
                const taskID = tasks[i].id;
                localStorage.removeItem(taskID);
                this.parentNode.remove();
            }
        };

        const tasks = document.getElementById('current-tasks').getElementsByTagName('li');
        const taskID = tasks[i].id;
        localStorage.setItem(taskID, tasks[i].innerText)

        document.querySelector('#new-task-name').value = "";
}
    }

const input = document.getElementById("new-task-name")

input.addEventListener("keyup", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("new-task-button").click();
    }
})