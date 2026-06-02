const restaurant = localStorage.getItem("restaurant");

const googleReviewBtn = document.getElementById("googleReviewBtn");

if(restaurant && restaurantsData[restaurant]){
    googleReviewBtn.href = restaurantsData[restaurant].google;
}else{
    googleReviewBtn.href = "index.html";
}