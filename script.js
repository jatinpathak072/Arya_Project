const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-slide-menu");
  const closeBtn = document.getElementById("close-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });

