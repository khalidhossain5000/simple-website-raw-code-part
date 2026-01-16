//   responsive hamburger menu starts here
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("duration-300");
});

// code for handiling modal open and form submission

const chatBtn = document.getElementById("chatBtn");
const chatModal = document.getElementById("chatModal");
const closeChat = document.getElementById("closeChat");
const chatForm = document.getElementById("chatForm");

// open modal
chatBtn.addEventListener("click", () => {
  chatModal.classList.remove("hidden");
  chatModal.classList.add("flex");
});

// Close modal when clicking outside
chatModal.addEventListener("click", (e) => {
  if (e.target === chatModal) {
    chatModal.classList.add("hidden");
    chatModal.classList.remove("flex");
  }
});

// Form submit with SweetAlert
chatForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Close modal
  chatModal.classList.add("hidden");
  chatModal.classList.remove("flex");

  // Show success alert
  Swal.fire({
    icon: "success",
    title: "Message Sent!",
    text: "We will get back to you shortly.",
    confirmButtonColor: "#2563EB",
  });

  chatForm.reset();
});
