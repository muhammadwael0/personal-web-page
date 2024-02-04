// Example: Change header color on scroll
window.addEventListener("scroll", function() {
    if (window.scrollY > 1) {
      document.querySelector("header").style.backgroundColor = "#007bff";
    } else {
      document.querySelector("header").style.backgroundColor = "#333";
    }
  });
  