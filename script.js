document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');

    // Show content at 2.8s (just before animation completes)
    setTimeout(() => {
        mainContent.style.display = 'block';
        window.scrollTo(0, 0);
    }, 3000);

    setTimeout(() => {
        preloader.remove();
    }, 4000);
});

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.navbar-collapse').classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar-toggler').classList.remove('active');
        document.querySelector('.navbar-collapse').classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.recruiter-marquee').addEventListener('mouseenter', () => {
    document.querySelector('.recruiter-logos').style.animationPlayState = 'paused';
});

document.querySelector('.recruiter-marquee').addEventListener('mouseleave', () => {
    document.querySelector('.recruiter-logos').style.animationPlayState = 'running';
});


document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function () {
    const terminalLines = document.querySelectorAll('.terminal-line');

    terminalLines.forEach((line, index) => {
        // Add slight stagger effect
        line.style.animationDelay = `${index * 0.5}s`;
    });

    // Add blinking cursor animation to last line
    const cursor = document.querySelector('.terminal-cursor');
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);
});

document.getElementById('myForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const statusElement = document.getElementById('form-status');

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // Success: Reset form & show message
            form.reset();
            statusElement.innerHTML = 'Thanks for your message!';
            statusElement.style.color = 'white';
        } else {
            const errorData = await response.json();
            statusElement.innerHTML = errorData.errors.map(err => err.message).join(', ');
            statusElement.style.color = 'red';
        }
    } catch (error) {
        statusElement.innerHTML = 'Oops! There was a problem.';
        statusElement.style.color = 'red';
    }
});