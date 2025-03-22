// ================ LOADING SCREEN ================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    const loadingPercentage = document.querySelector('.loading-percentage');
    
    // Back to top functionality
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
                backToTopBtn.style.pointerEvents = 'auto'; // Enable clicking
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
                backToTopBtn.style.pointerEvents = 'none'; // Disable clicking when hidden
            }
        });

        // Trigger scroll event once to set initial state
        window.dispatchEvent(new Event('scroll'));
    }
    
    // IMMEDIATELY MAKE ALL SECTIONS FULLY VISIBLE
    document.querySelectorAll('section, .section-title, .projects-grid, .project-card, .about-content, .contact-content').forEach(element => {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transform = 'none';
        element.style.zIndex = '10';
        
        if (element.classList.contains('projects-grid')) {
            element.style.display = 'grid';
        } else if (element.tagName === 'SECTION') {
            element.style.display = 'block';
        }
    });
    
    // Make sure all project cards are properly styled
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.display = 'block';
        card.style.transform = 'none';
        card.style.backgroundColor = 'rgba(10, 10, 20, 0.8)';
        card.style.border = '2px solid rgba(0, 168, 255, 0.5)';
        card.style.zIndex = '50';
    });

    // Set faster loading
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Hide loading screen immediately
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                
                // Initialize animations without scroll triggers
                initAnimations();
                
                // MAKE SURE EVERYTHING IS VISIBLE
                document.querySelectorAll('section, .section-title, .projects-grid, .project-card, .about-content, .contact-content').forEach(element => {
                    element.style.opacity = '1';
                    element.style.visibility = 'visible';
                    element.style.transform = 'none';
                });
            }, 300);
        }
        
        loadingProgress.style.width = `${progress}%`;
        loadingPercentage.textContent = `${Math.floor(progress)}%`;
    }, 50);
    
    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Init other components
    initNavigation();
    initSkillLevels();
    initBackgroundEffect();
    initContactForm();
});

// ================ NAVIGATION ================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const targetId = section.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Smooth scroll to section when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initialize active link on page load
    updateActiveNavLink();
}

// ================ ANIMATIONS ================
function initAnimations() {
    // Register ScrollTrigger plugin for GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // DISABLE ALL SCROLL TRIGGERS AND JUST MAKE EVERYTHING VISIBLE IMMEDIATELY
    
    // Hero section animations without delays
    gsap.to('.hero-content h1', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.cyber-subtitle', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.tech-stack-showcase', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.cta-buttons', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    // About section - immediately visible
    gsap.to('#about .section-title', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.profile-image', {
        duration: 0.1,
        x: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.about-text', {
        duration: 0.1,
        x: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    // Skills immediately visible
    gsap.to('.skill-item', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    // Projects section immediately visible
    gsap.to('#projects .section-title', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.project-card', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    // Contact section immediately visible
    gsap.to('#contact .section-title', {
        duration: 0.1,
        y: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.contact-info', {
        duration: 0.1,
        x: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.contact-form', {
        duration: 0.1,
        x: 0,
        opacity: 1,
        ease: 'power3.out'
    });
    
    // FORCE PROJECTS VISIBILITY ONE MORE TIME
    document.querySelectorAll('#projects, .projects-grid, .project-card, .project-image, .project-content').forEach(element => {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transform = 'none';
        element.style.position = 'relative';
        element.style.zIndex = '10';
    });
    
    // PROJECT CARDS - MAKE SURE THEY'RE DISPLAYED PROPERLY
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.display = 'block';
    });
}

// ================ SKILL LEVELS ================
function initSkillLevels() {
    // Set skill levels from data attributes
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.setProperty('--level', level);
    });
}

// ================ BACKGROUND EFFECT ================
function initBackgroundEffect() {
    // Initialize Three.js scene
    const canvas = document.getElementById('bg-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00a8ff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }
    
    for (let i = 0; i < particlesCount; i++) {
        scaleArray[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Create a texture for particles
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5gETEBwprJYQjwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMS0xOVQxNjoyODo0MSswMDowMEUnN5wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDEtMTlUMTY6Mjg6NDErMDA6MDA0eo8gAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAUxJREFUWMPt10FKw1AQBuD/T9KDuPUEbl15G3sCPUGv0G4F8Q7duXHtQhC9gyAKnsCNXsFGF4aMFKMkJK0bqV8gpOmb/2cyk8y8IBo7j4+HBLy3Z7QbHwR4bzcDAPz0OcAWwdXh0WV0OhvvfgUAgOf1xgCw1SdArXh/A0gnOLuZ2Jw9aDKBMQCL7zojgIe2ZUPZC0BxNm8d0tMmBUHTsOkwRYkkgAyAGYgRwDI2jdU5vRQEsXFtl2KbYgFYZMACQaQGJkXmVYl1ZSLqF1gQSP5YSz2FIBKAtXLY1A7eSB2g7ryUGmDVdyF1gEvnRRMIqwC5OleeQJQArP1c9QNhAM7iEMHp+m5yHOkJ8OHzAGJ0AJK4TdJyuOUXNh+IjjKJZTmgm9+kQJQAVsrzwMRXMxPF0VkWvJgTFfOedjP7uCIZq1D5L37Kb9i3KCL8AA3W1xRVcMiDAAAAAElFTkSuQmCC', () => {
        console.log('Particle texture loaded');
    });
    
    // Material for particles
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.5,
        color: 0x00a8ff,
        transparent: true,
        alphaMap: particleTexture,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    });
    
    // Create the particle system
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);
    
    // Animation loop
    const clock = new THREE.Clock();
    
    function animate() {
        const elapsedTime = clock.getElapsedTime();
        
        // Rotate the particle system
        particleSystem.rotation.x = elapsedTime * 0.05;
        particleSystem.rotation.y = elapsedTime * 0.03;
        
        // Update particle positions based on mouse position
        const mouseX = (event) => {
            particleSystem.rotation.y = (event.clientX / window.innerWidth - 0.5) * 0.2 + elapsedTime * 0.03;
        };
        
        const mouseY = (event) => {
            particleSystem.rotation.x = (event.clientY / window.innerHeight - 0.5) * 0.2 + elapsedTime * 0.05;
        };
        
        window.addEventListener('mousemove', (event) => {
            mouseX(event);
            mouseY(event);
        });
        
        // Render the scene
        renderer.render(scene, camera);
        
        window.requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        // Update camera
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        
        // Update renderer
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
}

// ================ CONTACT FORM ================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // For demo purposes, just log the data
        console.log('Form submitted:', { name, email, message });
        
        // Show success message (in a real scenario, you'd send data to a server here)
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span>MESSAGE SENT!</span> <i class="fas fa-check"></i>';
        submitBtn.style.background = 'linear-gradient(135deg, #00c853, #64dd17)';
        submitBtn.disabled = true;
        
        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    });
    
    // Add focus effects for form fields
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            const highlight = input.nextElementSibling;
            highlight.style.width = '100%';
        });
        
        input.addEventListener('blur', () => {
            const highlight = input.nextElementSibling;
            highlight.style.width = '0';
        });
    });
}

// ================ BACK TO TOP ================
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 