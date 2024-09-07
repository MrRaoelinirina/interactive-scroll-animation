// GSAP animation on page load
gsap.from(".content", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out"
});

// Animation on scroll
window.addEventListener("scroll", function() {
    gsap.to(".content", {
        duration: 1.2,
        opacity: 1,
        y: 0,
        ease: "power2.out"
    });
})
