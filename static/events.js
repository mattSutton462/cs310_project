(function(){
    const BASE_URL = "http://localhost:8080/events?type=all";

    window.addEventListener("load", init);

    function init(){
        fetchEvents();
    }

    function fetchEvents(){
        fetch(BASE_URL)
        .then(checkStatus);
    }

    function checkStatus(response) {
        if (!response.ok) {
            throw Error("Error in request: " + response.statusText);
        }
        return response.json();
    }
})()