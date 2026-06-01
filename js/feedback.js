const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const restaurant = localStorage.getItem("restaurant") || "Non renseigné";
    const rating = localStorage.getItem("rating") || "Non renseigné";

    const googleFormUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSfHkm9G61ytSwKyPqVw20VbhH7H7SvKE2Zuk8VzCWjYx04vjg/formResponse";

    const formData = new FormData();

    formData.append("entry.92790031", restaurant);
    formData.append("entry.1614165455", rating);
    formData.append("entry.1644273137", document.getElementById("qualite").value);
    formData.append("entry.1990538682", document.getElementById("commande").value);
    formData.append("entry.1338796880", document.getElementById("attente").value);
    formData.append("entry.1648199458", document.getElementById("accueil").value);
    formData.append("entry.1869186885", document.getElementById("proprete").value);
    formData.append("entry.2077063848", document.getElementById("commentaire").value);

    fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
    });

    alert("Merci pour votre retour.");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 800);

});