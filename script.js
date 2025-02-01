document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-toggle span");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            document.body.style.backgroundColor = "#222";
            document.body.style.color = "#fff";
        } else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#333";
        }
    });
});
