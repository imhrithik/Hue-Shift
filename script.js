const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F1C40F', 
    '#8E44AD', '#1ABC9C', '#E74C3C', '#F39C12', 
    '#2ECC71', '#3498DB', '#9B59B6', '#16A085'
];

const page = document.getElementById('page');
const message = document.getElementById('message');

const hueShifter = (event) => {
    // Pick random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply color to background
    page.style.backgroundColor = randomColor;

    // Change message text color for contrast
    message.style.color = randomColor;
};

// Event listener for mouse movement
document.addEventListener('mousemove', hueShifter);