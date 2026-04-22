// gsap.to('#profileScroll', {
// 	scrollTrigger: '#profileScroll', 
// 	scrub: true,
// 	y: "-=50"
// });

gsap.set("#spaceBackground", {xPercent: -50});

let xGo = gsap.quickTo("#spaceBackground", "x", {duration: 0.5, ease:"power3"})

let hoverSection = document.getElementById("profileSwipe")

hoverSection.addEventListener("mousemove", e => {
  xGo(e.clientX);
});



const myCarouselElement = document.querySelector('#carouselExampleCaptions')

const carousel = new bootstrap.Carousel(myCarouselElement, {
	interval: 2000,
	touch: true
})