const professions = [
    "Web Developer",
    "UI/UX Designer",
    "Data Scientist",
    "Full Stack Developer"
]
let professionIndex = 0;
let currentIndex = 0;
let isDeleting = false;

const professionElement = document.getElementById("profession");

function typeEffect() {
    const currentProfession = professions[professionIndex];

    if (isDeleting) {
        professionElement.textContent = currentProfession.substring(0, currentIndex - 1);
        currentIndex--;
        if (currentIndex <= 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
        }
    } else {
        professionElement.textContent = currentProfession.substring(0, currentIndex + 1);
        currentIndex++;
        if (currentIndex >= currentProfession.length) {
            isDeleting = true;
        }
    }
    setTimeout(typeEffect, isDeleting ? 100 : 200);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect(); // Start the typing effect when the DOM is fully loaded
});
