window.addEventListener("scroll", () => {
    const nav = document.querySelector("header");
    nav.classList.toggle("sticky", window.scrollY > 0);
});