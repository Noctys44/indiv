"use strict";


fetch('https://fine-outfit-pike.cyclic.app/')
.then(res => res.json())
.then(code => displayPerso(code))


const body = document.body

function displayPerso(perso) {
    

    const div = document.createElement('div')
    body.appendChild(div)
    div.classList.add('container')
    const container = document.querySelector('.container')
    perso.forEach(perso => {
        const ul = document.createElement('ul')
        container.appendChild(ul)
        ul.innerHTML += `<li> Nom : ${perso.lastname} </li> 
                         <li> Prénom : ${perso.firstname} </li> 
                         <li>  Age : ${perso.age} </li> 
                         <li>  Pouvoir : ${perso.power} </li>`
    });
   
    
    

}