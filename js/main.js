"use strict";

/***************
 * VARIABLE
 --------------*/

const nameInput = document.querySelector("#firstname")
const article = document.querySelector("article")

/***************
 * FUNCTION
 --------------*/

/**
 * Action au click sur submit
 */
function submitName() {
    //Recuperation du nom dans l'input
    const name = nameInput.value;

    //Requête de l'api
    const url = "https://api.agify.io/?name=" + name;
    fetch(url)
        .then(response => response.json())
        .then(datas => {
            article.classList.remove("hide"); //-- Rend zone de réponse visible
            article.querySelector("h2").innerHTML = `D'après Agify, avec le prénom ${datas.name}, tu as ${datas.age} ans.`
            article.querySelector("strong").innerHTML = `${datas.count}`
        })
        .catch(error => alert("Erreur : " + error));
}

/***************
 * CODE
 --------------*/

// Récupération du nom
document.querySelector("#submit").addEventListener("click", submitName)