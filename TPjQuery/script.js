$(document).ready(
    function ($) {
        let map = L.map('map').setView([51.505, -0.09], 1);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);
        setInterval(
            () => {
                $.ajax(
                    {
                        url: 'http://api.open-notify.org/iss-now.json',
                        method: 'GET'
                    },
                )
                    .done(
                        (res) => {

                            $("#latVal").text(res.iss_position.latitude);
                            $("#longVal").text(res.iss_position.longitude);
                            let marker = L.marker([res.iss_position.latitude, res.iss_position.longitude]).addTo(map);
                        }
                    )
            }, 1000);



    }

);

