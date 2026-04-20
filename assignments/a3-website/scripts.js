gsap.to('#profileScroll', {
	scrollTrigger: '#profileScroll', // start the animation when ".box" enters the viewport (once)
	y: -500
});

const myCarouselElement = document.querySelector('#carouselExampleCaptions')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true
})