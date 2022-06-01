let inputSavoir = document.getElementById("savoir");
let inputAuteur = document.getElementById("auteur");
let date = document.getElementById("date");
let boutonAjouter = document.getElementById("ajouter");
let liste = document.getElementById("listeDesSavoirs");

inputSavoir.focus();
boutonAjouter.addEventListener('click', ajouterSavoir);

function ajouterSavoir() {
    let verif = checkInputs();
    if (verif) {

        let nouveauSavoirLi = document.createElement("li");
        nouveauSavoirLi.addEventListener('click', supprimerSavoir);

        let nouveauSavoir = document.createElement("h2");
        nouveauSavoir.textContent = inputSavoir.value;
        nouveauSavoirLi.appendChild(nouveauSavoir);

        let nouveauAuteur = document.createElement("p");
        nouveauAuteur.textContent = "Par " + inputAuteur.value;
        nouveauSavoirLi.appendChild(nouveauAuteur);

        let nouvelleDate = document.createElement("p");
        nouvelleDate.textContent = "le " + new Date(date.value).toLocaleDateString("fr");
        nouveauSavoirLi.appendChild(nouvelleDate);

        liste.appendChild(nouveauSavoirLi);
        inputSavoir.value = "";
        inputAuteur.value = "";
        date.value = new Date().toISOString().substring(0, 10);
    }
}

function supprimerSavoir() {
    let res = window.confirm("Voulez-vous vraiment supprimer ce savoir ?");
    if (res) {
        this.remove();
    }
}

function checkInputs() {
    if (inputSavoir.value == "" || inputAuteur.value == "" || date.value == "") {
        alert("Veuillez remplir tous les champs");
        return false;
    }
    return true;
}


date.value = new Date().toISOString().substring(0, 10);
