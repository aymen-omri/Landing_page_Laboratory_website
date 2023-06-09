var nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        nav.classList.add('fixed-top', 'shadow');
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('fixed-top', 'shadow');
        nav.classList.remove('bg-dark', 'shadow');
    }
})