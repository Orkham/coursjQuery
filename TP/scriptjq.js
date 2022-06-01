$(document).ready(
    function ($) {
        function supprimerSavoir() {
            let res = window.confirm("Voulez-vous vraiment supprimer ce savoir ?");
            if (res) {
                this.remove();
            }
        }

        function ajouterSavoir() {

            let savoir = $("#savoir").val();
            console.log(savoir)
            if (savoir != "") {
                $("#listeDesSavoirs").append("<li>" + savoir + "</li>").click(supprimerSavoir);
                $("#savoir").val("");
            }
        }

        $("#ajouter").click(() => {
            ajouterSavoir();
        });



    });
