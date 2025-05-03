document.addEventListener("DOMContentLoaded", function () {
    const particleContainer = document.getElementById("particles");

    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Random Position
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.top = Math.random() * window.innerHeight + "px";

        // Random Size
        const size = Math.random() * 5 + 2 + "px";
        particle.style.width = size;
        particle.style.height = size;

        particleContainer.appendChild(particle);

        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, 4000);
    }

    setInterval(createParticle, 20);
});

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}