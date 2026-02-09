document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();

    // 1. Initial State
    gsap.set('.hero h1, .hero .subtext, .contact-section, .footer', {
        opacity: 0,
        y: 20,
        filter: 'blur(10px)'
    });

    gsap.set('.contact-card', {
        opacity: 0,
        y: 20,
        scale: 0.95
    });

    // 2. Entrance Animation
    tl.to('.hero h1', {
        duration: 1.2,
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        ease: 'power4.out'
    })
    .to('.hero .subtext', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        ease: 'power3.out'
    }, '-=0.8')
    .to('.contact-section', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        ease: 'power3.out'
    }, '-=0.4')
    .to('.contact-card', {
        duration: 0.6,
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        ease: 'power2.out'
    }, '-=0.4')
    .to('.footer', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        ease: 'power2.out'
    }, '-=0.4');

    // 3. Mouse Interaction
    const flare = document.getElementById('lens-flare');
    const scene = document.querySelector('.floating-elements');

    // Center flare initially
    gsap.set(flare, { x: window.innerWidth / 2 - 300, y: window.innerHeight / 2 - 300 });

    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = clientX / window.innerWidth;
        const y = clientY / window.innerHeight;

        // Move lens flare
        gsap.to(flare, {
            duration: 1,
            x: clientX - 300,
            y: clientY - 300,
            ease: 'power2.out'
        });

        // Parallax effect for scene
        const moveX = (x - 0.5) * 30;
        const moveY = (y - 0.5) * 30;

        gsap.to(scene, {
            duration: 1.5,
            rotateY: moveX,
            rotateX: -moveY,
            ease: 'power2.out'
        });

        // Subtle movement for spheres
        gsap.to('.sphere-1', {
            duration: 2,
            x: moveX * 1.5,
            y: moveY * 1.5,
            ease: 'power2.out'
        });

        gsap.to('.sphere-2', {
            duration: 2,
            x: -moveX * 1,
            y: -moveY * 1,
            ease: 'power2.out'
        });
    });

    // Touch support for flare
    window.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        gsap.to(flare, {
            duration: 1,
            x: touch.clientX - 300,
            y: touch.clientY - 300,
            ease: 'power2.out'
        });
    });
});
