const menuIcon = document.querySelector(".menu-icon");
const tagbox = document.querySelector(".tagbox");

menuIcon.addEventListener("click", () => {
    tagbox.classList.toggle("active");
});