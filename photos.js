// Aditi ki photos ke paths yahan update karein
const aditiPhotos = [
    "WhatsApp Image 2026-08-01 at 6.08.31 PM.jpeg",
    "WhatsApp Image 2026-08-01 at 6.08.32 PM (1).jpeg",
    "WhatsApp Image 2026-08-01 at 6.08.32 PM.jpeg",
    "WhatsApp Image 2026-08-01 at 6.08.32 PM (2).jpeg",
];

// Slider mein photos dynamic render karne ke liye function
function loadPhotos() {
    const container = document.getElementById('sliderContainer');
    if (!container) return; 
    
    container.innerHTML = ''; // Container clear karein
    
    aditiPhotos.forEach((photoSrc, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide-img';
        
        const img = document.createElement('img');
        img.src = photoSrc;
        img.alt = `Aditi ${index + 1}`;
        
        slideDiv.appendChild(img);
        container.appendChild(slideDiv);
    });
}

// Page load hote hi photos load hongi
document.addEventListener('DOMContentLoaded', loadPhotos);