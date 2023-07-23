/ JavaScript for smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Event listeners for smooth scrolling when clicking on navigation links
document.querySelectorAll('.header a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
    });
});

// Function to toggle active class on tab clicks and slide the content
function opentab(tabname) {
    const contents = document.querySelectorAll(".col2-row");
    const contents1 = document.querySelectorAll(".menu");

    contents.forEach(content => {
        content.classList.remove("active-link");
    });

    contents1.forEach(content => {
        content.style.maxHeight = null; // Reset max height before toggling
    });

    const currentLink = document.querySelector(`[onclick="opentab('${tabname}')"]`);
    const targetTab = document.getElementById(tabname);

    currentLink.classList.add("active-link");
    targetTab.style.maxHeight = targetTab.scrollHeight + "px"; // Expand the content
}
