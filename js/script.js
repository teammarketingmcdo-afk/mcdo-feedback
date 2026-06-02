const restaurant = localStorage.getItem("restaurant");

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

    if(rating >= 4){

        localStorage.setItem("rating", rating);

        window.location.href = "google-review.html";

    }else{

        localStorage.setItem("rating", rating);

        window.location.href = "feedback.html";

    }

});