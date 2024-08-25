// Show/hide scroll-to-top button
window.addEventListener("scroll", function () {
  const button = document.getElementById("scrollToTop");
  if (window.scrollY > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// Smooth scroll to top
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



// login js


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    alert('Welcome, ' + username + '!');
    // Redirect to the home page after login
    window.location.href = 'index.html';
});