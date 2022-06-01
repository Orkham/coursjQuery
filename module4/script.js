$(document).ready(
    function($){

        $("#titre").click(() => {
            $("#titre").css("color", "red");
            $("#titre").text("Titre changé");
            let r = Math.floor(Math.random() * 82);
            $.ajax(
                {
                    url: 'https://swapi.dev/api/people/' + r + '/',
                    method : 'GET'
                },

            )
                .done(
                    (res)=>{


                    }
                )
            ;
        });


    }
)