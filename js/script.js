const restaurantCode = localStorage.getItem("restaurant");
const currentRestaurant = restaurantsData[restaurantCode];

if(currentRestaurant){

    const restaurantName =
        document.getElementById("restaurantName");

    if(restaurantName){

        restaurantName.textContent =
            currentRestaurant.name;

    }

    document.getElementById("instagramBtn").href =
        currentRestaurant.instagram;

    document.getElementById("tiktokBtn").href =
        currentRestaurant.tiktok;

}

const stars = document.querySelectorAll(".star");
let rating = 0;


/* ========= STARS ========= */

stars.forEach((star,index)=>{

    star.addEventListener("click",()=>{

        rating = index + 1;

        stars.forEach(s=>s.classList.remove("active"));

        for(let i = 0; i < rating; i++){

            stars[i].classList.add("active");

        }

    });

});


/* ========= VALIDATION ========= */

document.getElementById("validate")
.addEventListener("click", () => {

    if(rating === 0){

        alert("Veuillez sélectionner une note");
        return;

    }

    if(!currentRestaurant){

        alert("Restaurant introuvable. Veuillez recommencer.");
        window.location.href = "index.html";
        return;

    }

    localStorage.setItem("rating", rating);

    if(rating >= 4){

        window.location.href =
            currentRestaurant.google;

    }else{

        window.location.href = "feedback.html";

    }

});