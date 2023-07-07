const navIcon = document.querySelector(".nav-icon");
const overlay = document.querySelector(".overlay");

var name_input = document.getElementById("name")
var email_input = document.getElementById("email")
var title_input = document.getElementById("title")
var message_input = document.getElementById("message")

$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();

        var formData = $(this).serialize();

        $('.btn').hide();
        $('.loading').show();

        setTimeout(function () {
            $('.loading').hide();
            $('.success-message').show();
            name_input.value = "";
            email_input.value = "";
            title_input.value = "";
            message_input.value = "";

        }, 2000);

        
    });

    navIcon.addEventListener("click", () => {
        navIcon.classList.toggle("open");
        if (overlay.style.height === "100%") {
            overlay.style.height = "0%";
        } else {
            overlay.style.height = "100%";
        }
    });
});