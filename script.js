// ==============================
// MOBILE NAVIGATION
// ==============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


// Close menu after clicking a link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


// ==============================
// NEWSLETTER
// ==============================

const form = document.getElementById("newsletterForm");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (email.value.trim() !== "") {

        message.textContent =
            "Thank you for joining the madbyMaidah fragrance journal.";

        email.value = "";

    }

});