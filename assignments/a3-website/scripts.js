gsap.to('#profileScroll', {
	scrollTrigger: '#profileScroll', 
	scrub: true,
	y: "-=50"
});

const myCarouselElement = document.querySelector('#carouselExampleCaptions')

const carousel = new bootstrap.Carousel(myCarouselElement, {
	interval: 2000,
	touch: true
})