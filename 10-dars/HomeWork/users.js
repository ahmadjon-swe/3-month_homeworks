// "use strict";

// fetching("https://jsonplaceholder.typicode.com/users", renderUsers, elBox)

// function renderUsers(data, HTMLelement) {
//     const headerTitle=document.querySelector(".headerTitle")
//     headerTitle.insertAdjacentHTML("afterbegin", `<h1 class="align-self-center text-white my-5">${data.length} users</h1>`)

//     for (const info of data) {
//         const html=`
//         <div class="userBox rounded w-25 my-1" style="background-color:#0b3d2e; color:#d1fae5;">
//             <div class="MainInfoWrap rounded-top d-flex justify-content-start align-items-center bg-success">
//                 <img class="rounded-top" src="./UserImages/icon.png" alt="./UserImages/icon.png" height="123" width="123">
//                 <div class="mainInfo ms-2">
//                     <a class="email m-0  text-info text-decoration-none" href="mailto:${info.email}">${info.email}</a>
//                     <h4 class="name text-white m-0">${info.name.length<17?info.name:info.name.slice(0,14)+"..."}</h4>
//                     <div class="usernamePhonenumber d-flex flex-wrap">
//                         <p class="userName text-warning m-0 me-1">@${info.username}</p>
//                         <p class="phoneNumber text-success-emphasis m-0">${info.phone.split(" ")[0]}</p>
//                     </div>
//                     <a class="website text-info text-decoration-none" href="https://${info.website}">${info.website}</a>
//                 </div>
//             </div>
//             <div class="UserBoxBottom p-2">
//                 <p class="location ms-2"><span class="location text-warning m-0">Address:  </span>${info.address.city}, ${info.address.street}, ${info.address.suite}</p>
            
//                 <div class="company d-flex">
            
//                     <p class="companyName m-0 ms-2 text-warning me-1">Company:  </p>
//                     <p class="companyName m-0 ms-2"> ${info.company.name}</p>
//                 </div>
//                     <!-- <p class="companyTextm-0">${info.company.bs}</p> -->
//             </div>
//         </div>
//         `
//         HTMLelement.insertAdjacentHTML("beforeend", html)
//     }
// }