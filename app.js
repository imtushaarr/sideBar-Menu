document.addEventListener('DOMContentLoaded', function() {
    const navOpen = document.getElementById('open');
    const navDiv = document.getElementById('navOpen')
    const navClose = document.getElementById('close');
    const nav = document.querySelector('nav');


    navOpen.addEventListener('click', function(){
        nav.classList.toggle('active');
        navDiv.style.display = 'none';
    });

    navClose.addEventListener('click', function() {
        nav.classList.toggle('active');
        navDiv.style.display = 'flex';
    });
})