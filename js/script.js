// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form (demo functionality)
function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you ${name}! Your message has been sent successfully.`);
  event.target.reset();
}
