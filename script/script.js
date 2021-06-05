window.addEventListener('DOMContentLoaded', function () {


	let buttons = document.querySelectorAll('.buttons');
	const content = document.querySelector('.header__content-number');
	const addButton = document.querySelector('.add-button');
	const headerButtons = document.querySelector('.header__buttons') 
	
	/*
	// функуия для вставки текста кнопки в блок контента
	const changeText = (element) => {
		content.textContent = element.textContent
	}
	// фдьтернатива с for
	for (let i = 0; i < buttons.length; i++)
		buttons[i].addEventListener('click', () => {
			changeText(buttons[i])
		});
	
	// фдьтернатива с foreach
	buttons.forEach((elem) => {
		elem.addEventListener('click', () => {
			changeText(elem)
		})
	})
	
	// сщздание новой кнопки
	const getButton = function() {
		const newButton = buttons[2].cloneNode()
		let textButton = buttons.length + 1
		if (textButton < 10){
			textButton = `0${textButton}`;
		}
		
		newButton.textContent = textButton
		headerButtons.appendChild(newButton)
		buttons = document.querySelectorAll('.buttons');
		
		// повесили событие для новых кнопок , чтобы отображался контент
		newButton.addEventListener('click', () => {
			changeText(newButton)
		})
		
	}
	// добавление кнопки при клике
	addButton.addEventListener('click', getButton)
*/
	
	
		// диспользование event.target(это еще не делегирование т к обработчики событий все еще имеются)
	/*
	const changeText = (event) => {
		
		content.textContent = event.target.textContent
		console.log('target.textContent: ', event.target.textContent);
	}

	buttons.forEach((elem) => {
		elem.addEventListener('click', changeText)
	})
	
	const getButton = function() {
		const newButton = buttons[2].cloneNode()
		let textButton = buttons.length + 1
		if (textButton < 10){
			textButton = `0${textButton}`;
		}
		
		newButton.textContent = textButton
		headerButtons.appendChild(newButton)
		buttons = document.querySelectorAll('.buttons');
		
		// повесили событие для новых кнопок , чтобы отображался контент
		newButton.addEventListener('click', changeText)
		
	}
	
	addButton.addEventListener('click', getButton)
*/
	
	
	
	
	// Делегирование
	
	
	const changeText = (event) => {
		
		content.textContent = event.target.textContent
	}

	// buttons.forEach((elem) => {
	// 	elem.addEventListener('click', changeText)
	// })
	
	const getButton = function() {
		const newButton = buttons[2].cloneNode()
		let textButton = buttons.length + 1
		if (textButton < 10){
			textButton = `0${textButton}`;
		}
		
		newButton.textContent = textButton
		headerButtons.appendChild(newButton)
		buttons = document.querySelectorAll('.buttons');
	}
	
	addButton.addEventListener('click', getButton)
	
	// тут в отличие от предыдущих примеров мы взяли родителя кнопок и при клике на пространство в нем создали условия: если мы кликаем на поустое место в обертке то ничего не происходит., а если на кнопки с тегом button, то вызываем функцию changeTet и вставляем соответствующий текст кнопки()
	
	// headerButtons.addEventListener('click', () => {
	// 	console.log(event.target);
	// 	if (event.target.tagName === 'BUTTON') {
		// 		changeText(event)
	// 	}
	
	// })
	
	
	// можно наоборот исключать в условии кнопки и прописывать return
	
	// headerButtons.addEventListener('click', () => {
	// 	if (event.target.tagName !== 'BUTTON') {
	// 		return
	// 	}
	// 		changeText(event)
	// })
	
	// textContent
	// headerButtons.addEventListener('click', () => {
	// 	if (event.target.tagName !== 'BUTTON') {
	// 		return
	// 	}
	// 		changeText(event)
	// })
	
	// textContain
	// headerButtons.addEventListener('click', () => {
	// 	if (event.target.classList.contains('buttons')) {
	// 		changeText(event)
	// 	}
	// })
	
	// target.matches
	headerButtons.addEventListener('click', () => {
		if (event.target.matches('.buttons')) {
			changeText(event)
		}
	})
	// также можно добавлять условия исключающие определенные кнопки. это можно сделать например с добавлением классов 
	



});