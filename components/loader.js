document.addEventListener("DOMContentLoaded", function() {
  // Check if it's the user's first visit
  if (!localStorage.getItem("firstVisit")) {
    localStorage.setItem("firstVisit", "true");

    window.onload = function() {
      const loader = document.getElementById("cute-loader");
      loader.classList.add("fade-out");
      // Remove loader from the DOM after the fade-out transition (500ms)
      setTimeout(() => {
        loader.parentNode.removeChild(loader);
      }, 500);
    };
  } else {
    const loader = document.getElementById("cute-loader");
    loader.parentNode.removeChild(loader);
  }
});