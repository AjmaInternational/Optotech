document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.glass-card');

    // 3D Tilt Effect
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset Tilt on mouse leave
    document.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });

    // Entrance Animations
    const tl = gsap.timeline();

    tl.to('.glass-card', { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" })
      .to('.logo', { opacity: 1, scale: 1, duration: 0.8 }, "-=0.6")
      .to('h1', { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to('.subtitle', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to('.lens-container', { opacity: 1, scale: 1, duration: 1 }, "-=0.6")
      .to('.contact-section', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to('.contact-button', {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .to('.thanks', { opacity: 1, duration: 1 }, "-=0.2");
});
