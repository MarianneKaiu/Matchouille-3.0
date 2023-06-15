const glass = document.querySelector(".fa-magnifying-glass");
const dots = document.querySelectorAll(".more-btn");
const more = document.querySelector("#more");

glass.addEventListener("click", () => {
    alert(
        "Je suis désolé, ce bouton n'est pas encore fonctionnel, veuillez retourner sur la page d'accueil"
    );
});

dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
        more.classList.toggle("visible");
    });
});
