document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            showModal(item);
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        modalImg.style.display = 'none';
        modalVideo.style.display = 'none';
    });

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
        showModal(galleryItems[currentIndex]);
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
        showModal(galleryItems[currentIndex]);
    });

    function showModal(item) {
        modal.style.display = 'block';
        if (item.tagName === 'IMG') {
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
            modalImg.src = item.src;
        } else if (item.tagName === 'VIDEO') {
            modalImg.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = item.querySelector('source').src;
        }
    }
});
