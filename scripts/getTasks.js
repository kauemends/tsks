// function loadTasks() {
//         var values = [],
//         keys = Object.keys(localStorage),
//         i = keys.length;

//         while (i--) {
//             values.push(localStorage.getItem(keys[i]));
//         }

//         for (var i=1; i <= localStorage.length; i++)  {
//             alert(localStorage.getItem(i))
//         }       

//         console.log(values);

//         if (values !== null || values !== undefined) {
//             document.querySelector('#current-tasks').innerHTML += `
//                 <li id="test">
//                     <div class="task">
//                         <input type="checkbox">
//                         <label id="task-name" data-content="test">test</label>
//                     </div>

//                     <button id="delete-task" class="delete-task">
//                         <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"/></svg>
//                     </button>
//                 </li>
//             `;
//         }
// }

// loadTasks()
