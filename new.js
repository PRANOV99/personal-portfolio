const text = "A Passionate Web Developer";
let index = 0;

function type() {
  document.getElementById("typed-text").textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 100);
  }
}

type();

// Smooth scrolling to section links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Alert when form is submitted (you can replace with real logic later)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message, Pranov will get back to you!");
});


