const restaurantCode =
    localStorage.getItem("restaurant") || "Non renseigné";

const currentRestaurant =
    restaurantsData[restaurantCode];

const restaurant =
    currentRestaurant ? currentRestaurant.name : restaurantCode;

const rating =
    localStorage.getItem("rating") || "Non renseigné";

document.getElementById("restaurantInput").value = restaurant;
document.getElementById("ratingInput").value = rating;

const restaurantDisplay =
    document.getElementById("restaurantDisplay");

if (restaurantDisplay) {
    restaurantDisplay.textContent = restaurant;
}

document.querySelectorAll(".choice-grid").forEach((grid) => {

    const targetId = grid.dataset.target;
    const hiddenInput = document.getElementById(targetId);
    const buttons = grid.querySelectorAll(".choice-btn");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            hiddenInput.value = button.dataset.value;

            if (targetId === "contactChoice") {

                const contactFields =
                    document.getElementById("contactFields");

                if (button.dataset.value === "Oui") {

                    contactFields.style.display = "flex";

                } else {

                    contactFields.style.display = "none";

                }

            }

        });

    });

});