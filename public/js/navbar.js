document.addEventListener("DOMContentLoaded", () => {

  const menuIcon = document.getElementById("menu-icon");
  const nav = document.querySelector(".nav");
  const overlay = document.getElementById("overlay");

  if (!menuIcon || !nav || !overlay) return;

  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      nav.classList.remove("active");
      overlay.classList.remove("active");
    }
  });

});