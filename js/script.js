const restaurant = localStorage.getItem("restaurant");
const restaurantName =
document.getElementById("restaurantName");

if(restaurantName && restaurant){

    restaurantName.textContent = restaurant;

}

if (restaurant && restaurantsData[restaurant]) {

    document.getElementById("instagramBtn").href =
        restaurantsData[restaurant].instagram;

    document.getElementById("tiktokBtn").href =
        restaurantsData[restaurant].tiktok;

}



const stars = document.querySelectorAll(".star");
let rating = 0;





/* ========= STARS ========= */

stars.forEach((star,index)=>{

star.addEventListener("click",()=>{

rating=index+1;

stars.forEach(s=>s.classList.remove("active"));

for(let i=0;i<rating;i++){

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

    localStorage.setItem("rating", rating);

    if(rating >= 4){

        window.location.href = restaurantsData[restaurant].google;

    }else{

        window.location.href = "feedback.html";

    }

});