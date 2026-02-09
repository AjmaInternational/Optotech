document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    // Initial reveal animation
    const tl = gsap.timeline({
        onComplete: () => console.log('Timeline Complete'),
        onStart: () => console.log('Timeline Started')
    });

    tl.from('.navbar', {
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
    })
    .from('.pre-heading', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.main-title', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.2
    }, '-=0.6')
    .from('.description', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.hub-title', {
        opacity: 0,
        duration: 0.8
    }, '-=0.4')
    .from('.glass-card', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.minimal-footer', {
        opacity: 0,
        duration: 1
    }, '-=0.4');

    // Mouse Parallax Effect
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 2;
        const yPos = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to('.lens-1', { x: xPos * 50, y: yPos * 50, duration: 1 });
        gsap.to('.lens-2', { x: xPos * -30, y: yPos * -30, duration: 1 });
        gsap.to('.lens-3', { x: xPos * 20, y: yPos * 20, duration: 1 });

        const cards = document.querySelectorAll('.glass-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = clientX - (rect.left + rect.width / 2);
            const cardY = clientY - (rect.top + rect.height / 2);
            const dist = Math.sqrt(cardX * cardX + cardY * cardY);
            if (dist < 400) {
                gsap.to(card, { rotationY: cardX / 20, rotationX: -cardY / 20, duration: 0.5 });
            } else {
                gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5 });
            }
        });
    });

    gsap.fromTo('body',
        { filter: 'blur(10px) brightness(0.5)' },
        { filter: 'blur(0px) brightness(1)', duration: 2, ease: 'power2.inOut' }
    );
});
