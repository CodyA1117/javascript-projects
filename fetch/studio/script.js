window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            // Get the container element
            let container = document.getElementById("container");

            // Add the astronaut count
            let astronautCount = document.createElement("h3");
            astronautCount.textContent = `Total Astronauts: ${json.length}`;
            container.appendChild(astronautCount);

            // Sort astronauts by hours in space (descending)
            json.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

            // Generate HTML for each astronaut
            let astronautList = '';
            for (let i = 0; i < json.length; i++) {
                astronautList += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li style="color: ${json[i].active ? 'green' : 'black'};">
                                Active: ${json[i].active}
                            </li>
                            <li>Skills: ${json[i].skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `;
            }

            // Add the astronaut cards to the container
            container.innerHTML += astronautList;
        });
    });
});
