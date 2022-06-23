const btnP = document.querySelector("#btnP");
const btnR = document.querySelector("#btnR");
const ulList = document.querySelector("#ulList");

ftch();

let arrName = [];
let arrLinkimg = [];
let arrType = [];

function ftch() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=199").then(res => res.json()).then(data => {

        for (let i = 0; i < data.results.length; i++) {
            arrName.push(data.results[i].name);
        }

        data.results.forEach(lint => {
            fetch(lint.url).then(resp => resp.json()).then(listUl => {
                arrLinkimg.push(listUl.sprites.front_shiny);
                arrType.push(listUl.types[0].type.name);
            });
        });

    });
}

btnR.addEventListener('click', () => {
    ulList.innerHTML = '';
    btnR.classList.remove("active");
    btnP.classList.remove("active");
});

btnP.addEventListener('click', () => {
    btnR.classList.add("active");
    btnP.classList.add("active");
    for (let j = 0; j < arrName.length; j++) {
        if (arrType[j] === "grass") {
            ulList.innerHTML += `
            <li class="card" style="background-color: lime;">
                <img src="${arrLinkimg[j]}" alt="">
                <h3 id="name">${arrName[j]}</h3>
                <span id="type">Type : ${arrType[j]}</span>
                <p>${[j + 1]}</p>
            </li>`;
        } else if (arrType[j] === "fire") {
            ulList.innerHTML += `
            <li class="card" style="background-color: red;">
                <img src="${arrLinkimg[j]}" alt="">
                <h3 id="name">${arrName[j]}</h3>
                <span id="type">Type : ${arrType[j]}</span>
                <p>${[j + 1]}</p>
            </li>`;
        } else if (arrType[j] === "bug") {
            ulList.innerHTML += `
            <li class="card" style="background-color: gray;">
                <img src="${arrLinkimg[j]}" alt="">
                <h3 id="name">${arrName[j]}</h3>
                <span id="type">Type : ${arrType[j]}</span>
                <p>${[j + 1]}</p>
            </li>`;
        } else if (arrType[j] === "water") {
            ulList.innerHTML += `
            <li class="card" style="background-color: blue;">
                <img src="${arrLinkimg[j]}" alt="">
                <h3 id="name">${arrName[j]}</h3>
                <span id="type">Type : ${arrType[j]}</span>
                <p>${[j + 1]}</p>
            </li>`;
        } else if (arrType[j] === "normal") {
            ulList.innerHTML += `
            <li class="card" style="background-color: aliceblue;">
                <img src="${arrLinkimg[j]}" alt="">
                <h3 id="name">${arrName[j]}</h3>
                <span id="type">Type : ${arrType[j]}</span>
                <p>${[j + 1]}</p>
            </li>`;
        } else if (arrType[j] === "poison") {
            ulList.innerHTML += `
            <li class="card" style="background-color: purple;">
                <img src="${arrLinkimg[j]}" alt="">
                <h3 id="name">${arrName[j]}</h3>
                <span id="type">Type : ${arrType[j]}</span>
                <p>${[j + 1]}</p>
            </li>`;
        } else if (arrType[j] === "electric") {
            ulList.innerHTML += `
            <li class="card" style="background-color: orange;">
                <img src="${arrLinkimg[j]}" alt="">
                <h3 id="name">${arrName[j]}</h3>
                <span id="type">Type : ${arrType[j]}</span>
                <p>${[j]}</p>
            </li>`;
        } else if (arrType[j] === "ground") {
            ulList.innerHTML += `
            <li class="card" style="background-color: brown;">
                <img src="${arrLinkimg[j]}" alt="">
                <h3 id="name">${arrName[j]}</h3>
                <span id="type">Type : ${arrType[j]}</span>
                <p>${[j]}</p>
            </li>`;
        }
    }

});

console.log(arrType);