// Matrix Rain Animation
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Make canvas fill the entire screen
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Characters to use for the Matrix code
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Convert the string to an array of characters
    const charArray = characters.split('');
    
    // Column settings
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    
    // Initialize an array for the y-position of each column
    // Drop starts randomly along the height of the canvas
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
    }
    
    // Main drawing function
    function draw() {
        // Semi-transparent black background to create trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set text color and font
        ctx.fillStyle = '#0F0'; // Bright green
        ctx.font = `${fontSize}px monospace`;
        
        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            // Get a random character
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            
            // Draw the character
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Reset the drop when it reaches the bottom or randomly
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Move the drop down
            drops[i]++;
        }
    }
    
    // Create brighter characters at random positions
    function createBrightSpots() {
        // Number of bright spots
        const numSpots = Math.floor(Math.random() * 10) + 5;
        
        for (let i = 0; i < numSpots; i++) {
            const x = Math.floor(Math.random() * columns);
            const y = Math.floor(Math.random() * (canvas.height / fontSize));
            
            // Draw brighter character
            ctx.fillStyle = '#AAFFAA'; // Lighter green
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, x * fontSize, y * fontSize);
            
            // Draw even brighter character occasionally
            if (Math.random() > 0.7) {
                ctx.fillStyle = '#FFFFFF'; // White for emphasis
                const text2 = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text2, (x + 1) * fontSize, y * fontSize);
            }
        }
    }
    
    // Animation loop
    function animate() {
        draw();
        createBrightSpots();
        requestAnimationFrame(animate);
    }
    
    // Start the animation
    animate();
}); 