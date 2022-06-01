let myDiv = document.getElementById('maDiv');
myDiv.textContent = 'Hello World';



let mesElements = document.querySelectorAll('.maClasse');
mesElements.forEach(function(element) {
    console.log(element);
});

let nouvelElement = document.createElement('p');
nouvelElement.textContent = 'Nouveau paragraphe';
document.body.appendChild(nouvelElement);

function clickme() {
    myDiv.previousElementSibling.innerHTML = 'Nouveau Titre';
}