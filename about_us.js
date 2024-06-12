document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalVideo = document.getElementById("modal-video");
    const closeBtn = document.getElementsByClassName("close")[0];

    const galleryItems = document.getElementsByClassName("gallery-item");

    for (let item of galleryItems) {
        item.addEventListener("click", function() {
            if (item.tagName === "IMG") {
                modalImage.src = item.src;
                modalImage.style.display = "block";
                modalVideo.style.display = "none";
            } else if (item.tagName === "VIDEO") {
                modalVideo.src = item.getElementsByTagName("source")[0].src;
                modalVideo.style.display = "block";
                modalImage.style.display = "none";
            }
            modal.style.display = "block";
        });
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
        modalImage.src = "";
        modalVideo.src = "";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalImage.src = "";
            modalVideo.src = "";
        }
    }
});
