document.getElementById('open-menu').addEventListener('click', function() {
    document.getElementById('nav').style.display = 'block';
});
document.getElementById('open-menu').addEventListener('click', function() {
    document.getElementById('open-menu').style.display = 'none';
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('nav').style.display = 'none';
});
document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('open-menu').style.display = 'block';
});

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('nav');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var heightThreshold = 100; // Change this value to your desired height

    if (scrolled > heightThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

