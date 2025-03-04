document.addEventListener("DOMContentLoaded", function() {
    // Toggle Navbar
    document.querySelector(".navbar-toggler").addEventListener("click", function() {
        document.querySelector(".navbar-nav").classList.toggle("show");
        window.addEventListener("scroll", function() {
            let navbar = document.querySelector(".navbar");
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    
    });
    
    // Auto-slide testimonials
    let carousel = new bootstrap.Carousel(document.querySelector("#testimonialCarousel"), {
        interval: 3000, // Slide every 3 seconds
        pause: "hover"
    });
});
