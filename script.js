// ==========================
// Side Menu Toggle
// ==========================
const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

// ==========================
// Navbar scroll effect
// ==========================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
});

// ==========================
// Slow rotation for image
// ==========================
const rotatingImage = document.querySelector('img[src="./images-portfolio/circular-text.png"]');

if (rotatingImage) { // check if the image exists
    let angle = 0; // current rotation angle in degrees
    const speed = 1.5; // degrees per frame, smaller = slower

    function rotate() {
        angle += speed;
        rotatingImage.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotate);
    }

    rotate(); // start rotation
}

// ==========================
// Dark Mode Toggle
// ==========================
const darkModeBtn = document.querySelector('button img[src="./images-portfolio/moon_icon.png"]');
const htmlElement = document.documentElement;

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');

        // Optional: Change icon when dark mode is active
        if (htmlElement.classList.contains('dark')) {
            darkModeBtn.src = './images-portfolio/sun_icon.png'; // replace with sun icon
        } else {
            darkModeBtn.src = './images-portfolio/moon_icon.png'; // back to moon
        }
    });
}
