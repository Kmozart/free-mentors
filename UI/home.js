const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', () => {
        // Toggle Nav
    nav.classList.toggle('nav-active');

        // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
    });

    // Burger Animate
    burger.classList.toggle('toggle');
    });

}

navSlide();

/*const searchBar = document.forms['search'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const mentors = list.getElementsByTagName('li');
    Array.from(mentors).forEach(mentor) => {
        const title = mentor.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term)!= -1){
            mentor.style.display = 'block';
        } else {
            mentor.style.display = none;
        }
    }
}) */
