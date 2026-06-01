const restaurant = localStorage.getItem("restaurant") || "Non renseigné";
const rating = localStorage.getItem("rating") || "Non renseigné";

document.getElementById("restaurantInput").value = restaurant;
document.getElementById("ratingInput").value = rating;

const contactChoice =
document.getElementById("contactChoice");

const contactFields =
document.getElementById("contactFields");

contactChoice.addEventListener("change", () => {

    if(contactChoice.value === "Oui"){

        contactFields.style.display = "block";

    }else{

        contactFields.style.display = "none";

    }

});