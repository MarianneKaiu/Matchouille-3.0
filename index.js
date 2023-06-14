const glass = document.querySelector(".fa-magnifying-glass");
const dots = document.querySelectorAll(".fa-solid");
const more = document.querySelector("#more");
let cardId;

glass.addEventListener("click", () => {
    alert(
        "Je suis désolé, ce bouton n'est pas encore fonctionnel, veuillez retourner sur la page d'accueil"
    );
});

dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
        more.classList.toggle("hidden");
        console.log(e.target.id);
    });
});
