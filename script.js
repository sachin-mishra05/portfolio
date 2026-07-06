(function () {
    emailjs.init({
        publicKey: "IJfqXf1AagI4q7f7L",
    });
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_92qlonn",
        "template_yr6w3hn",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
    });
});