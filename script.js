// JavaScript to change the content of the page when a link is clicked
var home = document.getElementById("home");
var about = document.getElementById("about");
var posts = document.getElementById("posts");
var contact = document.getElementById("contact");
var mainContent = document.getElementById("main-content");

home.addEventListener("click", function() {
    mainContent.innerHTML = "<h1>Welcome to our Blog</h1><p>Here you can find all the latest updates and articles.</p>";
});
about.addEventListener("click", function() {
    mainContent.innerHTML = "<h1>About Us</h1><p>Learn more about the team behind this blog.</p>";
});
posts.addEventListener("click", function() {
    mainContent.innerHTML = "<h1>Recent Posts</h
