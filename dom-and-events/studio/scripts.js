window.addEventListener("load", function () {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let land = document.getElementById("landing");
    let abortMission = document.getElementById("missionAbort");
    let rocket = document.getElementById("rocket");

    // Initialize rocket's position
    rocket.style.position = "absolute"; // Ensure the rocket is absolutely positioned
    rocket.style.left = "0px"; 
    rocket.style.bottom = "0px";

    takeOff.addEventListener("click", function () {
        let confirmed = window.confirm("Confirm that shuttle is ready for takeoff");

        if (confirmed) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    land.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.left = "0px";  // Reset rocket position
        rocket.style.bottom = "0px";
    });

    abortMission.addEventListener("click", function(){
        let confirmed = window.confirm("Confirm that you want to abort the mission.");
        if (confirmed) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green"; // Changed to green to match the requirements
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.left = "0px";  // Reset rocket position
            rocket.style.bottom = "0px";
        }
    });

    // Add event listeners for movement buttons
    document.getElementById("up").addEventListener("click", function(){
        let currentBottom = parseInt(rocket.style.bottom);
        rocket.style.bottom = (currentBottom + 10) + "px";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    });

    document.getElementById("down").addEventListener("click", function(){
        let currentBottom = parseInt(rocket.style.bottom);
        if (currentBottom > 0) { // Prevent rocket from going below the screen
            rocket.style.bottom = (currentBottom - 10) + "px";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        }
    });

    document.getElementById("left").addEventListener("click", function(){
        let currentLeft = parseInt(rocket.style.left);
        if (currentLeft > 0) { // Prevent rocket from moving off the left edge
            rocket.style.left = (currentLeft - 10) + "px";
        }
    });

    document.getElementById("right").addEventListener("click", function(){
        let currentLeft = parseInt(rocket.style.left);
        rocket.style.left = (currentLeft + 10) + "px";
    });
});