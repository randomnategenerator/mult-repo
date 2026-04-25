// https://codepen.io/jamiem89/pen/gOevYyP

let scrollImages = document.querySelectorAll('.scroll-image')

scrollImages.forEach(el => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: 'top 10%',
			end: 'bottom center',
			toggleActions: 'play none reverse none',
			scrub: 1
		}
	});
	tl.to(el, {opacity: 0, yPercent: -10})
})



const myCarouselElement = document.querySelector('#carouselExampleCaptions')

const carousel = new bootstrap.Carousel(myCarouselElement, {
	interval: 2000,
	touch: true
})