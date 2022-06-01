$(document).ready(
    function ($) {

        let deckId;
        $("#actionBtn").click(() => {
            $("#actionBtn").hide();
            let nouveauBouton = $("<button id='fightBtn'>Combat</button>");
            $("#actionBtn").after(nouveauBouton);
            $.ajax(
                {
                    url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
                    method: 'GET'
                },
            )
                .done(
                    (res) => {
                        $("#leftCards").text(res.remaining)
                        deckId = res.deck_id;
                    }
                ).fail(
                (err) => {
                    console.log(err);
                }
            ).always(
                (res) => {
                    $("#fightBtn").click(function () {
                        fight(deckId)
                    });
                }
            )
        })

        function fight(deckId) {
            $.ajax(
                {
                    url: 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=2 ',
                    method: 'GET'
                },
            )
                .done(
                    (res) => {
                        $("#cardOne").removeClass("lose");
                        $("#cardTwo").removeClass("lose");
                        $("#leftCards").text(res.remaining);
                        let img1src = res.cards[0].image;
                        let img2src = res.cards[1].image;
                        $("#cardOne").attr("src", img1src);
                        $("#cardTwo").attr("src", img2src);
                        if (compareCards(res.cards[0], res.cards[1]) == 1) {
                            $("#scoreOne").text(parseInt($("#scoreOne").text()) + 1);
                            $("#cardTwo").addClass("lose");
                        } else if (compareCards(res.cards[0], res.cards[1]) == -1) {
                            $("#scoreTwo").text(parseInt($("#scoreTwo").text()) + 1);
                            $("#cardOne").addClass("lose");
                        } else {
                            console.log("egalite");
                        }
                    }
                ).fail(
                (err) => {
                    console.log(err);
                }
            ).always(
                (res) => {
                    if (res.remaining === 0) {
                        $(".container").css("display", "none");
                        let scores = [$("#scoreOne").text(), $("#scoreTwo").text()];
                        if (parseInt(scores[0]) > parseInt(scores[1])) {
                            console.log("le joueur 1 gagne");
                            $("#anakinWins").css("display", "flex");
                        } else if (parseInt(scores[0]) < parseInt(scores[1])) {
                            console.log("le joueur 2 gagne");
                            $("#obiwanWins").css("display", "flex");
                        } else {
                            console.log("egalite");
                            $("#itsADraw").css("display", "flex");
                        }


                    }

                }
            )

        }

        function compareCards(cardOne, cardTwo) {
            let one = getComparableValue(cardOne);
            let two = getComparableValue(cardTwo);
            console.log(one, two);
            if (cardOne.value > cardTwo.value) {
                return 1;
            } else if (cardOne.value < cardTwo.value) {
                return -1;
            } else {
                return 0;
            }
        }

        function getComparableValue(card) {
            switch (card.value) {
                case "ACE":
                    return 14;
                    break;
                case "KING":
                    return 13;
                    break;
                case "QUEEN":
                    return 12;
                    break;
                case "JACK":
                    return 11;
                    break;
                case "10":
                    return 10;
                    break;
                case "9":
                    return 9;
                    break;
                case "8":
                    return 8;
                    break;
                case "7":
                    return 7;
                    break;
                case "6":
                    return 6;
                    break;
                case "5":
                    return 5;
                    break;
                case "4":
                    return 4;
                    break;
                case "3":
                    return 3;
                    break;
                case "2":
                    return 2;
                    break;
                default:
                    return 0;
            }
        }

    }
);