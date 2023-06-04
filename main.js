
let searchInput = document.getElementById('search');
document.getElementById('get-character').addEventListener('click', function() {
fetchRandomCharacter();
})
document.getElementById('get-all-characters').addEventListener('click', function(){
    fetchAllCharacters();
})

searchInput.addEventListener('keyup', function(){
;
});



function fetchRandomCharacter() {
     let randomID = Math.floor(Math.random() * 9) +1;
     
fetch(`https://swapi.dev/api/people/${randomID}`)
.then(response => response.json())
.then(data => {
    document.getElementById('character').innerHTML =
    `<h2>${data.name}</h2>
    <p>Height: ${data.height}km</p>
    <p>Mass: ${data.mass}kg</p>
    <p>Hair color: ${data.hair_color}</p>
    <p>Skin Color: ${data.skin_color}</p>
    <p>Eye Color: ${data.eye_color}</p>
    <p>Birth Year: ${data.birth_year}</p>
    <p>Gender: ${data.gender}</p>`;
})
.catch(error => console.log("Error: ", error));

}

function fetchAllCharacters() {
    fetch(`https://swapi.dev/api/people/`)
    .then(response => response.json())
    .then(data => {
        let characters = data.results;
        let charactersList = document.getElementById('characters');
        charactersList.innerHTML = '';
        characters.forEach(character => {
            let li = document.createElement('li');
            li.textContent = character.name;
            li.addEventListener('click', function() {
                document.getElementById('character').innerHTML = 
    `<h2>${character.name}</h2>
    <p>Height: ${character.height}cm</p>
    <p>Mass: ${character.mass}kg</p>
    <p>Hair color: ${character.hair_color}</p>
    <p>Skin Color: ${character.skin_color}</p>
    <p>Eye Color: ${character.eye_color}</p>
    <p>Birth Year: ${character.birth_year}</p>
    <p>Gender: ${character.gender}</p>`
            })
            charactersList.appendChild(li);
        });
    })
    .catch(error => console.log('Error: ', error))
}




// // GET--getting data
// fetch('https://swapi.dev/api/people/1/')
// .then(response => response.json())
// .then(data => console.log('character: ', data.name))

// .catch(error => console.log("Error: ", error));










































// -->reference guide--
// 
// // GET--getting data
// fetch('https://swapi.dev/api/people/1/')
// .then(response => response.json())
// .then(data => console.log('character: ', data.name))

// .catch(error => console.log("Error: ", error));



// // POST--sending data
// let characterData = {
//     name: 'Spock',
//     height: '100' 
// }
// {
// let requestOptions = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(characterData)
// };
// }

// // PUT--update existing data
// let updatedCharacterData = {
//     name: 'spongebob',
//     height: '200'
// };

// let requestOptions = {
//     method: 'Put',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(updatedCharacterData)
// };

// fetch('https://swapi.dev/api/people/1/', requestOptions)
// .then(response => response.json())
// .then(data => console.log('Put response: ', data))
// .catch(error => console.log('Error: ', error))

// {
// // DELETE
//  let requestOptions = {
//     method: 'DELETE'
//  };

//  fetch('https://swapi.dev/api/people/1/', requestOptions)
//  .then(response => response.status)
//  .then(status => console.log('Delete response: ', status))
//  .catch(error => console.log('Error: ', error))


 
// }