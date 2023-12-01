(function () {
    const BASE_URL = "http://localhost:8080/events?type=all";

    window.addEventListener("load", init);

    function init() {
        fetchEvents();
    }

    function fetchEvents() {
        fetch(BASE_URL)
        .then(checkStatus)
        .then((data) => {
             fillEvents(data);
        });
    }

    function fillEvents(data) {
        const eventSpace = document.getElementById('event-space');

        data.forEach((event) => {
            let e = document.createElement("p");
            e.innerHTML = event.event_type + " on " + event.event_date + " at " + event.location + " at " + event.event_time;
            eventSpace.appendChild(e);
        });
    }

    function checkStatus(response) {
        if (!response.ok) {
            throw Error("Error in request: " + response.statusText);
        }
        return response.json();
    }
})();
