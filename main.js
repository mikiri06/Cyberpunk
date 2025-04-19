let prewBtn = document.getElementById('prew-btn')
let nextBtn = document.getElementById('next-btn')
let swiperWrapper = document.querySelector('.swiper-item')
let slides = document.querySelectorAll('.swiper-slide')

let curentSlide = 0

const showSlide = index => {
	const offset = -index * 100
	swiperWrapper.style.transform = `translateX(${offset}vw)`
}

const nextSlide = () => {
	curentSlide = (curentSlide + 1) % slides.length
	showSlide(curentSlide)
}

const prewSlide = () => {
	curentSlide = (curentSlide - 1 + slides.length) % slides.length
	showSlide(curentSlide)
}

prewBtn.onclick = () => {
	prewSlide()
	clearInterval(intervall)
	intervall = setInterval(prewSlide, 5000)
}

nextBtn.onclick = () => {
	nextSlide()
	clearInterval(intervall)
	intervall = setInterval(nextSlide, 5000)
}

let intervall = setInterval(() => {
	nextSlide()
}, 5000)
