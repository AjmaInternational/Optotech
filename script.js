gsap.from(".card",{
  y:40,
  opacity:0,
  duration:1.2,
  ease:"power3.out"
});

gsap.from(".logo",{
  scale:0.6,
  opacity:0,
  duration:1,
  delay:0.3
});

gsap.from("h1, p",{
  y:20,
  opacity:0,
  stagger:0.2,
  delay:0.5,
  duration:0.8
});

gsap.to("#lens",{
  rotationY:360,
  rotationX:360,
  repeat:-1,
  ease:"none",
  duration:18
});