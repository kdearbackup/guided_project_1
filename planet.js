const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');

let planetDiv = document.getElementById("planet"); 
let charactersDiv = document.getElementById("characters"); 
let filmsDiv = document.getElementById("films"); 

fetch(`http://localhost:9001/api/planets/${id}`)
  .then(response => response.json()) 
  .then(planet => {
    // Process the data received from the server
    console.log(planet);
    planetDiv.innerHTML += `<p>${planet.name}</p>`; 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  
  

fetch(`http://localhost:9001/api/planets/${id}/characters`)
  .then(response => response.json()) 
  .then(characters => {
    // Process the data received from the server
    console.log(characters);
    for (let i =0; i < characters.length; i++){
        charactersDiv.innerHTML += `<p><a href="http://localhost:3000/character.html?id=${characters[i].id}">${characters[i].name}</href></p>`;
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

fetch(`http://localhost:9001/api/planets/${id}/films`)
  .then(response => response.json()) 
  .then(films => {
    // Process the data received from the server
    console.log(films);
    for (let i =0; i < films.length; i++){
        filmsDiv.innerHTML += `<p><a href="http://localhost:3000/film.html?id=${films[i].id}">${films[i].title}</href></p>`;
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

