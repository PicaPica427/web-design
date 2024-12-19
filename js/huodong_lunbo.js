const slides = document.querySelectorAll('.slide');
// document.write(slides)
slides[0].classList.add('active');
let currentSlide = 0;

function showSlide(slideIndex) {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});

	slides[slideIndex].classList.add('active');
}

function nextSlide() {
	currentSlide++;
	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}
	showSlide(currentSlide);
}

function startSlideshow() {
	setInterval(nextSlide, 3000); // 每隔3秒切换一次轮播图
}

startSlideshow();


// window.onload = function() {
// 	var gulitop = document.getElementById('guli_gif');
// 	// gulitop.src = ''
// 	gulitop.onmousedown = function() {
// 		document.getElementById('guli_gif').src = "img/huodongend.gif"
// 		// document.getElementById('guli_gif').src = document.getElementById('guli_gif').src
// 	}
// }