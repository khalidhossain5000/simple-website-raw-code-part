//   responsive hamburger menu starts here
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("duration-300");
  });