document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (menuToggle && navigation) {

        function closeMenu() {
            navigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        }

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    }

    // Update copyright year automatically

    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});

// FUTURE LEADERS - CONTACT ENQUIRY FORM

document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contact-form");

    if (!contactForm) return;

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!contactForm.reportValidity()) return;

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const organisation = document.getElementById("contact-organisation").value.trim();
        const service = document.getElementById("contact-service").value;
        const message = document.getElementById("contact-message").value.trim();

        if (!name || !email || !service || !message) return;

        const subject = `Future Leaders Enquiry - ${service}`;

        const body = [
            "Future Leaders (Pty) Ltd",
            "",
            "New Website Enquiry",
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            `Organisation: ${organisation || "Not provided"}`,
            `Service: ${service}`,
            "",
            "Message:",
            message
        ].join("\n");

        const mailtoLink =
            "mailto:plentygeorgeous@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.location.href = mailtoLink;

    });

});
