// Toggle responsive navigation menu
function myMenuFunction() {
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Change active link dot below navigation menu
function scrollActive() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionTop = current.offsetTop - 50;
        const sectionBottom = sectionTop + current.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            document.querySelector('.nav-menu a[href="#' + current.id + '"]').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href="#' + current.id + '"]').classList.remove('active-link');
        }
    });
}

function downloadResume() {
    // Replace 'resume.pdf' with the path to your resume PDF file
    const resumeUrl = 'resume.pdf';

    // Create an anchor element
    const anchorElement = document.createElement('a');

    // Set the href attribute to the URL of your resume PDF file
    anchorElement.href = resumeUrl;

    // Set the download attribute to specify the filename users will see when they download the file
    anchorElement.download = 'resume.pdf';

    // Simulate a click on the anchor element to trigger the download
    anchorElement.click();
}

// Add scroll event listener for changing active link
window.addEventListener('scroll', scrollActive);


// Add scroll event listener for changing active link
window.addEventListener('scroll', scrollActive);
// Add shadow on navigation bar while scrolling
window.onscroll = function() {
    headerShadow();
};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    } else {
        navHeader.style.boxShadow = "none";
    }
}

// Add scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Home section animations
sr.reveal('.featured-text', {});
sr.reveal('.featured-image', { delay: 300 });

// About and Projects section animations
sr.reveal('.section', { interval: 200 });

