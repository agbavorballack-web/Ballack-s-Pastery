// Modal functionality - shared across all pages
function openImage(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeImage() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeImage();
    }
});

// Initialize modal click handlers
document.addEventListener('DOMContentLoaded', () => {
    // Find all clickable images (gallery images, menu card images, hero images)
    const clickableImages = document.querySelectorAll('.gallery-image, .menu-card img, .hero-image');
    clickableImages.forEach(img => {
        img.addEventListener('click', () => openImage(img.src));
    });
});
