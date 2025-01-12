document.addEventListener("DOMContentLoaded", () => {
    const rosterGrid = document.querySelector(".roster-grid");
    const teamMembers = [
        "Marlon", "Mechz", "Daniel", "Garfield", 
        "Lyq", "Vxnum", "Clownzy", "Foriso", 
        "Pico", "Inscily"
    ];

    // Dynamically load roster
    teamMembers.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("roster-item");
        div.innerHTML = `<h2>${member}</h2><p>Role: Competitive</p>`;
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
