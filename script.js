const qualitiesContainer = document.querySelector('.qualities-container');
const dots = document.querySelectorAll('.dot');

let index = 0;
const totalItems = document.querySelectorAll('.quality-item').length;

function autoScroll() {
    index++;
    if (index >= totalItems) {
        index = 0;
    }
    updateScroll();
}

function updateScroll() {
    qualitiesContainer.scrollTo({
        left: index * (qualitiesContainer.scrollWidth / totalItems),
        behavior: 'smooth'
    });
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

let autoScrollInterval = setInterval(autoScroll, 3000);

qualitiesContainer.addEventListener('scroll', () => {
    clearInterval(autoScrollInterval);
    const scrollLeft = qualitiesContainer.scrollLeft;
    const scrollWidth = qualitiesContainer.scrollWidth;
    const clientWidth = qualitiesContainer.clientWidth;

    index = Math.round((scrollLeft / (scrollWidth - clientWidth)) * (totalItems - 1));
    updateDots();
    autoScrollInterval = setInterval(autoScroll, 3000);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateScroll();
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(autoScroll, 3000);
    });
});

function sendMessage(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var message = document.getElementById('message').value;
    var phoneNumber = '355692080053'; // Replace with the actual phone number
    var whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
