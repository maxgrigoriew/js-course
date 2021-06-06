	window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	const addZero = (number) => {
		if (number < 10) return ('0' + number);
		else return number;
	};

	// Animation
	const popupOpenAnimation = () => {
		const popup = document.querySelector('.popup-content');
		let opacity = 0;
		let opacityBg = 0;
		let animationId;

		popup.parentNode.style.backgroundColor = `rgba(0,0,0,0)`;
		popup.style.opacity = opacity;

		// Element's animation
		const animate = () => {
			if (opacity <= 1) {
				opacity += 0.03;
				opacityBg += 0.015;

				popup.style.opacity = opacity;
				popup.parentNode.style.backgroundColor = `rgba(0,0,0,${opacityBg})`;

				animationId = requestAnimationFrame(animate);
			} else {
				cancelAnimationFrame(animationId);
				popup.style.opacity = 1;
				popup.parentNode.style.backgroundColor = `rgba(0,0,0,0.5)`;
			}
		};

		animationId = requestAnimationFrame(animate);
	};

	const popupCloseAnimation = () => {
		const popup = document.querySelector('.popup-content');
		let opacity = 1;
		let opacityBg = 0.5;
		let animationId;

		// Element's animation
		const animate = () => {
			if (opacity >= 0) {
				opacity -= 0.03;
				opacityBg -= 0.015;

				popup.style.opacity = opacity;
				popup.parentNode.style.backgroundColor = `rgba(0,0,0,${opacityBg})`;

				animationId = requestAnimationFrame(animate);
			} else {
				cancelAnimationFrame(animationId);
				popup.parentNode.style.display = 'none';
			}
		};

		animationId = requestAnimationFrame(animate);
	};

	// Timer
	const timer = (deadline) => {
		// DOM-elements
		const timerSeconds = document.querySelector('#timer-seconds');
		const timerMinutes = document.querySelector('#timer-minutes');
		const timerHours = document.querySelector('#timer-hours');
		const timerDays = document.querySelector('#timer-days');

		// Timer's logic
		const getTimerRemainder = () => {
			const dateStop = new Date(deadline).getTime();
			let dateNow = new Date().getTime();

			let timerRemainder = (dateStop - dateNow) / 1000;
			let seconds = Math.floor(timerRemainder % 60);
			let minutes = Math.floor((timerRemainder / 60) % 60);
			let hours = Math.floor((timerRemainder / 60 / 60) % 24);
			let days = Math.floor(timerRemainder / 60 / 60 / 24);

			return {
			timerRemainder,
			seconds,
			minutes,
			hours,
			days
			};
		};

		let idUpdateTimer = 0;

		const updateTimer = () => {
			let timerResult = getTimerRemainder();

			timerSeconds.textContent = addZero(timerResult.seconds);
			timerMinutes.textContent = addZero(timerResult.minutes);
			timerHours.textContent = addZero(timerResult.hours);
			timerDays.textContent = addZero(timerResult.days);

			if (timerResult.timerRemainder < 0) {
				clearInterval(idUpdateTimer);

				timerSeconds.textContent = '00';
				timerMinutes.textContent = '00';
				timerHours.textContent = '00';
				timerDays.textContent = '00';
			}
		};

		updateTimer();

		idUpdateTimer = setInterval(updateTimer, 1000);
	};

	// Menu
	const toggleMenu = () => {
		const menuList = document.querySelector('menu');
		const menuLinks = menuList.querySelectorAll('li>a');

		const handlerMenu = () => {
			menuList.classList.toggle('active-menu');
		};
			
		document.body.addEventListener('click', event => {
			let target = event.target;

			if (target.classList.contains('close-btn')) {
				handlerMenu();
			} else if (target.closest('.menu')) {
				handlerMenu();
			} else if (!target.closest('.active-menu')) {
				menuList.classList.remove('active-menu');
			} else  {
				menuLinks.forEach(item => {
				if (item === target) {
					event.preventDefault();
					handlerMenu();
					smoothScroll(item);
					}
				});
			}
		});
	};
	const smoothScroll = (item) => {
		const element = document.querySelector(item.getAttribute('href')); 

		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};
		
	document.querySelector('a[href="#service-block"]').addEventListener('click', (event) => {
		event.preventDefault();

		document.querySelector('#service-block').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	});

	// PopUp
	const togglePopUp = () => {
		const popup = document.querySelector('.popup');
		const popupOpenBtn = document.querySelectorAll('.popup-btn');
		const popupCloseBtn = document.querySelectorAll('.popup-close');

		popupOpenBtn.forEach((item) =>
			item.addEventListener('click', () => {
				popup.style.display = 'block';
				if (screen.width >= 768) popupOpenAnimation();
			})
		);

		if (screen.width >= 768) popupCloseAnimation();
		else {
			popup.style.display = 'none';
		}
		
		popup.addEventListener('click', () => {
			let target = event.target;
			if (target.classList.contains('popup-close')) {
				popup.style.display = 'none';
			}
			
			target = target.closest('.popup-content')
			if (!target) {
				popup.style.display = 'none';
			}
		})
	};

	const deadline = new Date(' 10 juny 2021');
	timer(deadline);

	toggleMenu();

		togglePopUp();
		
		
	// tabs
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = document.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');
		
		const toggleTabContent = (index) => {
			for (let i = 0; i < tabContent.length; i++){
				if (i === index) {
					tab[i].classList.add('active')
					tabContent[i].classList.remove('d-none')
				}
				else {
					tab[i].classList.remove('active')
					tabContent[i].classList.add('d-none')
				}
			}
		}
		
		tabHeader.addEventListener('click', (event) => {
			let target = event.target;
			while (target !== tabHeader) {
				
				if (target.classList.contains('service-header-tab')) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i)
					}
				});
					return;
				};
				target = target.parentNode
			}
		});
	}
	
	tabs();
	
	
	// slider
	
	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item');
		const btn = document.querySelectorAll('.portfolio-btn');
		const slider = document.querySelector('.portfolio-content');
		const portfolioDots = document.querySelector('.portfolio-dots');
		// const dot = document.querySelectorAll('.dot');
		let currentSlide = 0;
		let interval;
		
		const addDotts = () => {
			
			const createDots = () => {
				const portfolioDots = document.querySelector('.portfolio-dots');
				const newDots = document.createElement('li');
				newDots.classList.add('dot');
				portfolioDots.appendChild(newDots);
			};
			
			for (let i = 0; i < slide.length; i++) {
				createDots();
			};
		};
		
		addDotts();
		
		let dot = document.querySelectorAll('.dot');
		dot[0].classList.add('dot-active')
		
		const prevSlide = (element, index, strClass) => {
			element[index].classList.remove(strClass);
		};
		
		const nextSlide = (element, index, strClass) => {
			element[index].classList.add(strClass);
		};
		
		const autoPlay = () => {
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			};
			
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};
		
		const startSlider = (time = 2000) => {
			interval = setInterval(autoPlay, time);
		};
		
		const stopSlider = () => {
			clearInterval(interval);
		};
		
		slider.addEventListener('click', (event) => {
			event.preventDefault();
			
			let target = event.target;
			
			if (!target.matches('#arrow-right, #arrow-left, .dot')) {
				return;
			}
			
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			
			if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('#arrow-right')) {
				currentSlide++;
			}
				
			else if (target.matches('.dot')) {
				dot.forEach((element, index) => {
					if (element === target) {
						currentSlide = index;
					}
				});
			}
			
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			
			 if (currentSlide < 0) {
				currentSlide = slide.length -1 ;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		});
		
		slider.addEventListener('mouseover', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				stopSlider();
			}
		});
		
		slider.addEventListener('mouseout', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				startSlider();
			}
		});
		
		startSlider(2000);
		
	};
		
	slider();
		
		
});