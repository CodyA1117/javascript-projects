function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

// Put your code for the exercises here.
// When the Take off button is clicked
liftoffButton.addEventListener('click', function() {
    statusReport.textContent = 'Houston, we have liftoff!';
});

// When the user's cursor goes over the Abort Mission button
missionAbort.addEventListener('mouseover', function() {
    missionAbort.style.backgroundColor = 'red';
});

// When the user's cursor leaves the Abort Mission button
missionAbort.addEventListener('mouseout', function() {
    missionAbort.style.backgroundColor = '';
});

// When the user clicks the Abort Mission button
missionAbort.addEventListener('click', function() {
    const confirmAbort = confirm('Are you sure you want to abort the mission?');
    if (confirmAbort) {
        statusReport.textContent = 'Mission aborted! Space shuttle returning home.';
    }
});
};


window.addEventListener("load", init);
