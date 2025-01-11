document.addEventListener("DOMContentLoaded", () => {
    const rosterGrid = document.querySelector(".roster-grid");

    // Assign roles to players
    const teamMembers = [
        { name: "Marlon", role: "Captain" },
        { name: "Mechz", role: "Defender" },
        { name: "Daniel", role: "Striker" },
        { name: "Garfield", role: "Midfielder" },
        { name: "Lyq", role: "Goalkeeper" },
        { name: "Vxnum", role: "Defender" },
        { name: "Clownzy", role: "Midfielder" },
        { name: "Foriso", role: "Striker" },
        { name: "Pico", role: "Support" },
        { name: "Inscily", role: "Defender" }
    ];

    // Dynamically load roster
    teamMembers.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("roster-item");
        div.innerHTML = `<h2>${member.name}</h2><p>Role: ${member.role}</p>`;
        rosterGrid.appendChild(div);
    });

    // Loading screen
    const loadingScreen = document.getElementById("loading");
    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500);
    }, 3000); // 3 seconds loading screen
});
