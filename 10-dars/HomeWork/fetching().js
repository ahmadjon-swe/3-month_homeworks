"use strict";

const elBox = document.querySelector(".box");

function fetching(link, callBack, HTMLelement) {
    fetch(`${link}`)
        .then((data) => data.json())
        .then((info) => callBack(info, HTMLelement));
}

// qolgan JavaScript fayllarini ctrl+A bilan commentdan chiqarsangiz ishlaydi
// kerakli joylarni belgilab o'tirish shart emas