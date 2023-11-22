(function(){
    const BASE_URL = "http://localhost:8080/events?type=all";

    window.addEventListener("load", init);

    function init(){
        fetchEvents();
    }

    function fetchEvents(){
        fetch(BASE_URL)
        .then(checkStatus)
        .then((data)=>{
            data = data;
            fillEvents(data);
        });
    }

    function fillEvents(data){
        for (let i = 0; i < data.length; i++) {
            let e = document.createElement("p");
            e.innerHTML = data.location + " " + data.event_date + " " + data.event_time + " " + data.event_type;
            document.getElementById('event-space').appendChild(e);
        }
    }

    function checkStatus(response) {
        if (!response.ok) {
            throw Error("Error in request: " + response.statusText);
        }
        return response.json();
    }
})()