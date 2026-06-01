const restaurant = localStorage.getItem("restaurant") || "Non renseigné";
const rating = localStorage.getItem("rating") || "Non renseigné";

document.getElementById("restaurantInput").value = restaurant;
document.getElementById("ratingInput").value = rating;