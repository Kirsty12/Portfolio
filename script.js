document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message Sent! I will get back to you soon.');
});

document.querySelector(".navbar-toggler").addEventListener("click", function () {
    let expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !expanded);
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    this.reset();
    let responseMessage = document.getElementById("formResponse");
    responseMessage.textContent = "Thank you but I am not currently processing messages.";
    responseMessage.style.color = "green";
    responseMessage.classList.remove("hidden");
});
