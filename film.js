//addEventListener('DOMContentLoaded', ()=> {
const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');
//})

fetch(`http://localhost:9001/api/films/${id}`)
.then(response => response.json())
.then(film => {
    document.getElementById('film').innerHTML = `<h1>${film.title}</h1>`;
    document.getElementById('director').innerHTML = `<h1>${film.director}</h1>`;
});

fetch(`http://localhost:9001/api/films/${id}/characters`)
.then(response => response.json())
.then(characters => {
    const charContainer = document.getElementById('characters')
    charContainer.innerHTML = '<h2>Characters</h2>'
    characters.forEach(char=>{
        charContainer.innerHTML += `<a href = "character.html?id=${char.id}">${char.name}</p>`;
        
    }

    )})

fetch (`http://localhost:9001/api/films/${id}/planets`) 
.then(response => response.json())
.then(planets => {
    const planContainer = document.getElementById('planets')
    planContainer.innerHTML = `<h2>Planets</h2>`
    planets.forEach(planet =>{
        planContainer.innerHTML += `<a href="planet.html?id=${planet.id}">${planet.name}</a><br>`
    })
 
})



