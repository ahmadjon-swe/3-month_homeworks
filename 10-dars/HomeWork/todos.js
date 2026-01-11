// "use strict";

// // // TODOS /////////////////////////////////////////////////////////////////////////////////////

// fetching("https://jsonplaceholder.typicode.com/todos", renderTodos, elBox);

// function renderTodos(data, HTMLelement) {
//     const header = document.querySelector(".headerTitle");
//     header.insertAdjacentHTML(
//         "afterbegin",
//         `<h1 class="align-self-center text-white my-5">${data.length} todos</h1>`
//     );

//     for (const info of data) {
//         const elTodoBox = document.createElement("div");
//         const elTodoInput = document.createElement("input");
//         const elTodoText = document.createElement("p");

//         // textContent
//         elTodoText.textContent = `${info.title}`;
//         elTodoInput.checked = info.completed;

//         // setAtribyuts
//         elTodoBox.setAttribute(
//             "class",
//             "todo d-flex align-items-center w-25 p-2 border border-success"
//         );
//         elTodoInput.setAttribute("class", "todoInput me-2");
//         elTodoInput.setAttribute("type", "checkbox");
//         elTodoText.setAttribute(
//             "class",
//             `text-warning m-0 ${
//                 info.completed
//                     ? "text-decoration-line-through text-warning-emphasis"
//                     : ""
//             }`
//         );

//         // database
//         elTodoInput.dataset.todoDatasetCheckedId = info.id;

//         // yig'ish
//         elTodoBox.appendChild(elTodoInput);
//         elTodoBox.appendChild(elTodoText);
//         HTMLelement.appendChild(elTodoBox);
//     }
// }

// function isDone(elHtml) {
//     const elText = elHtml.nextElementSibling;

//     if (elHtml.checked) {
//         // elText.removeAttribute("class");
//         elText.setAttribute(
//             "class",
//             `text-warning m-0 text-decoration-line-through text-warning-emphasis`
//         );
//     } else {
//         // elText.removeAttribute("class");
//         elText.setAttribute("class", `text-warning m-0`);
//     }
// }

// elBox.addEventListener("change", (evt) => {
//     if (evt.target.matches(".todoInput")) {
//         // const foundedDataset = evt.target.dataset.todoDatasetCheckedId
//         // const foundedElement = document.querySelector(`[data-todoDatasetCheckedId=${foundedDataset}]`)
//         isDone(evt.target);
//     }
// });
