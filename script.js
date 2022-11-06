let backing = document.querySelector(".backing");

backing.addEventListener("click", () => {
    backing.style.display = "none";
});

let registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
    backing.style.display = "flex";
});