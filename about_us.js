document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalVideo = document.getElementById("modal-video");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentIndex = index;
            showModal(item);
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modalImage.style.display = "none";
        modalVideo.style.display = "none";
        modalVideo.controls = false; // Hide controls when modal is closed
        modalVideo.pause(); // Pause video when modal is closed
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        showModal(galleryItems[currentIndex]);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        showModal(galleryItems[currentIndex]);
    });

    function showModal(item) {
        const isVideo = item.tagName === "VIDEO";
        modal.style.display = "block";
        if (isVideo) {
            modalVideo.style.display = "block";
            modalImage.style.display = "none";
            modalVideo.src = item.querySelector("source").src;
            modalVideo.controls = true; // Show controls when video is played
            modalVideo.play(); // Automatically play video when modal opens
        } else {
            modalImage.style.display = "block";
            modalVideo.style.display = "none";
            modalImage.src = item.src;
        }
    }
});
