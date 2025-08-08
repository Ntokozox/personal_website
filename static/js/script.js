// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Personalized greeting on the home page
    if (document.title.includes("Home")) {
        const greeting = document.createElement("p");
        const hour = new Date().getHours();
        let message;

        if (hour < 12) {
            message = "Good morning and welcome to my portfolio!";
        } else if (hour < 18) {
            message = "Good afternoon! Thanks for stopping by.";
        } else {
            message = "Good evening! Explore my work and get in touch.";
        }

        greeting.textContent = message;
        greeting.style.fontSize = "1.2rem";
        greeting.style.color = "#444";
        greeting.style.marginTop = "10px";

        const main = document.querySelector("main");
        if (main) {
            main.prepend(greeting);
        }
    }

    // Highlight active navigation link
    const currentUrl = window.location.pathname;
    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active-nav");
        }
    });

    // Confirm on phone number click
    const phoneLinks = document.querySelectorAll("a[href^='tel:']");
    phoneLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const confirmCall = confirm("Would you like to call Ntokozo now?");
            if (!confirmCall) e.preventDefault();
        });
    });

    // Confirm on email click
    const emailLinks = document.querySelectorAll("a[href^='mailto:']");
    emailLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const confirmEmail = confirm("Would you like to send an email to Ntokozo?");
            if (!confirmEmail) e.preventDefault();
        });
    });

    // LinkedIn opens in a new tab with confirmation
    const linkedinLinks = document.querySelectorAll("a[href*='linkedin.com']");
    linkedinLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const confirmView = confirm("Do you want to view Ntokozo's LinkedIn profile?");
            if (!confirmView) {
                e.preventDefault();
            } else {
                link.setAttribute("target", "_blank");
            }
        });
    });
    // NB: Do the above for github
    const githubLinks = document.querySelectorAll("a[href*='github.com']")
    githubLinks.forEach(link => {
        link.addEventListener("click", (e) => { 
            confirmView = confirm("Do you want view Ntokozo's github profile?") // will using the same variable as the above function render it useless or rewrite this function or do I need a new variable?
            if (!confirmView) {
                e.preventDefault();
            } else {
                link.setAttribute('target, "_blank"')
            }
        });
    });

    // Zoom effect on profile image
    const profileImage = document.querySelector("img");
    if (profileImage) {
        profileImage.style.transition = "transform 0.3s ease";
        profileImage.addEventListener("mouseenter", () => {
            profileImage.style.transform = "scale(1.05)";
        });
        profileImage.addEventListener("mouseleave", () => {
            profileImage.style.transform = "scale(1)";
        });
    }

    // Scroll-to-top button (optional)
    const scrollButton = document.createElement("button");
    scrollButton.textContent = "↑";
    scrollButton.setAttribute("aria-label", "Scroll to top");
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.padding = "10px 15px";
    scrollButton.style.fontSize = "18px";
    scrollButton.style.border = "none";
    scrollButton.style.borderRadius = "50%";
    scrollButton.style.backgroundColor = "#007acc";
    scrollButton.style.color = "#fff";
    scrollButton.style.cursor = "pointer";
    scrollButton.style.display = "none";
    scrollButton.style.zIndex = "1000";

    document.body.appendChild(scrollButton);

    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        scrollButton.style.display = window.scrollY > 100 ? "block" : "none";
    });
});
