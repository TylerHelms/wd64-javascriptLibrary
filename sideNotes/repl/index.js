let url = 'https://rickandmortyapi.com/api/character/';
                             
let rickImage = document.querySelector('.Rick');
let mortyImage = document.querySelector('.Morty');
console.log('rickImage', rickImage);

fetch(url)
.then(results =>{ 
return results.json();
})
.then(json => {
    console.log(json)
    displayImage(json)
})
function displayImage(data) {
    console.log('DisplayImage: ', data)

    let rick = document.createElement('Rick')
    rickImage.appendChild(rick);
    
   
}


