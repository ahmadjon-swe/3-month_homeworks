// "use strict";

// // COMMENTS /////////////////////////////////////////////////////////////////////////////////////

// fetching(
//     "https://jsonplaceholder.typicode.com/comments",
//     renderComments,
//     elBox
// );

// function renderComments(data, HTMLelement) {
//     const header=document.querySelector('.headerTitle')
//     header.insertAdjacentHTML(
//         "afterbegin",
//         `<h1 class="align-self-center text-white my-5">${data.length} comments</h1>`
//     );

//     for (const info of data) {
//         const html = `
//         <!-- 3 ga bo'linish uchun w-25 qo'shish kifoya -->
//         <div class="my-2 rounded " style="background-color:#0b3d2e; color:#d1fae5;">
//             <div class="username-box bg-success px-3  rounded-top">
//                 <p class="fs-6 text-warning m-0">${info.email}</p>
//                 <p class="fs-5 pb-1 text-success-subtle text-white m-0">${info.name}</p>
//             </div>
//             <p class="fs-3 p-2">${info.body}</p>
//         </div>
//         `;

//         HTMLelement.insertAdjacentHTML("beforeend", html);
//     }
// }
