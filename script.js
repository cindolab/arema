// Smooth scroll ke section kalau ada link anchor (opsional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Lazy load enhancement atau animasi sederhana (bisa ditambah nanti)
console.log("SSB arema.eth loaded successfully!");
