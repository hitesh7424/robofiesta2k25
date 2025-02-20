document.addEventListener("DOMContentLoaded", function() {
    // Adjust delay as needed (example: 3 seconds)
    setTimeout(() => {
      const loader = document.getElementById("cute-loader");
      loader.classList.add("fade-out");
      // Remove loader from the DOM after the fade-out transition (500ms)
      setTimeout(() => {
        loader.parentNode.removeChild(loader);
      }, 500);
    }, 3000);
  });
  