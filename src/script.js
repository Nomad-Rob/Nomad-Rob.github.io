function toggleMenu() {
    const menu = document.getElementById('menu-bar');
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  
  // Optional: Submit contact form using Fetch API or any other method
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your AJAX form submit logic here
  });
  