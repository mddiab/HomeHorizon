let toggleButton = document.getElementById('toggleModeBtn');
let body = document.body;

// Dark Mode Toggle
toggleButton.addEventListener('click', () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        toggleButton.textContent = '🔮';
    } else {
        body.classList.add("dark-mode");
        toggleButton.textContent = '🔆';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let housesContainer = document.getElementById("housesContainer");
    let searchBar = document.getElementById("searchBar");
    let houseCountSelect = document.getElementById("houseCount");
    let cityFilter = document.getElementById("cityFilter");

    let housesData = [];
    let displayedCount = localStorage.getItem("houseCount") || "10"; // Default to 10

    houseCountSelect.value = displayedCount; // Set dropdown to last saved value

    // Fetch houses from JSON
    fetch("houses.json")
        .then(response => response.json())
        .then(data => {
            housesData = data;
            displayHouses();
        })
        .catch(error => console.error("Error loading houses:", error));

    function displayHouses() {
        housesContainer.innerHTML = "";
        const searchText = searchBar.value.trim().toLowerCase();
        const cityText = cityFilter.value.trim().toLowerCase();

        let filteredHouses = housesData.filter(house => 
            house.city.toLowerCase().includes(cityText) && 
            house.city.toLowerCase().includes(searchText)
        );

        // Get the number of houses to display
        let limit = houseCountSelect.value === "all" ? filteredHouses.length : parseInt(houseCountSelect.value);
        filteredHouses = filteredHouses.slice(0, limit);

        if (filteredHouses.length === 0) {
            housesContainer.innerHTML = "<p>No houses found.</p>";
            return;
        }

        filteredHouses.forEach(house => {
            let houseCard = document.createElement("div");
            houseCard.classList.add("house-card");

            houseCard.innerHTML = `
                <img src="${house.image}" alt="${house.title}">
                <div class="house-info">
                    <h3>${house.title}</h3>
                    <p><strong>City:</strong> ${house.city}</p>
                    <p><strong>Price:</strong> ${house.price}</p>
                    <p><strong>Size:</strong> ${house.size}</p>
                    <p>${house.description}</p>
                </div>
            `;
            housesContainer.appendChild(houseCard);
        });
    }

    // Event Listeners
    searchBar.addEventListener("input", displayHouses);

    houseCountSelect.addEventListener("change", () => {
        localStorage.setItem("houseCount", houseCountSelect.value); // Save selection
        displayHouses();
    });

    cityFilter.addEventListener("input", displayHouses); // Filter houses by city
});
