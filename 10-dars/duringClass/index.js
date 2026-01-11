"use strict";

let elBox = document.querySelector(".box");

// // // countries //////////////////////////////////////////////////////

// function renderCountries(country, HTMLelement) {
//     const reqquest = new XMLHttpRequest();
//     reqquest.open("get", `https://restcountries.com/v3.1/name/${country}`);
//     reqquest.send();

//     reqquest.addEventListener("load", function () {
//         const [result] = JSON.parse(reqquest.responseText);

//         const html = `
//     <article>
//         <img src="${result.flags.png}" alt="">
//         <h4>${result.name.official}</h4>
//         <p>${result.fifa}</p>
//     </article>
//     `;

//         HTMLelement.insertAdjacentHTML("beforeend", html);
//     });
// }

// renderCountries("uzbekistan", elBox);
// renderCountries("usa", elBox);
// renderCountries("china", elBox);
// renderCountries("india", elBox);

// // Promise

// fetch(`https://restcountries.com/v3.1/name/uzbekistan`)
//     .then((res) => res.json())
//     .then((data) => renderCountries(data[0], elBox))
//     .catch(console.log("error"));

// function renderCountries(info, HTMLelement) {
//     const html = `
//         <article>
//             <img src="${info.flags.png}" alt="">
//             <h4>${info.name.official}</h4>
//             <p>${info.fifa}</p>
//         </article>
//         `;

//     HTMLelement.insertAdjacentHTML("beforeend", html);
// }

// // Async Await

// async function renderCountries(country, HTMLelement) {
//     const request = await fetch(
//         `https://restcountries.com/v3.1/name/${country}`
//     );
//     const [info] = await request.json();

//     const html = `
//         <article>
//             <img src="${info.flags.png}" alt="">
//             <h4>${info.name.official}</h4>
//             <p>${info.fifa}</p>
//         </article>
//         `;

//     HTMLelement.insertAdjacentHTML("beforeend", html);
// }

// renderCountries("uzbekistan", elBox);

// // // posts //////////////////////////////////////////////////////////////

// elBox tepada bor

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(res=>res.json())
.then(data=>renderPosts(data, elBox))
.catch(console.log("error"))

function renderPosts(data, HTMLelement){
    for (const v of data) {
        const html = `
        <li class="bg-secondary-subtle p-3 rounded w-25">
            <h4>${v.title}</h4>
            <p>${v.body}</p>
        </li>
        `
        HTMLelement.insertAdjacentHTML('beforeend', html)
    }
}
