'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElem = function() {
    let selectorValue = this.selector.slice(1);

    let cssStyles = `
    height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};
    `;

    if (this.selector[0] === '.') {
        let newDiv = document.createElement('div');

        newDiv.classList.add(selectorValue);
        newDiv.innerHTML = `Создан элемент div ${selectorValue}`;
        newDiv.style.cssText = cssStyles;
        document.body.appendChild(newDiv);
        
    } else if (this.selector[0] === '#') {
        let newParagraph = document.createElement('p');

        newParagraph.id = selectorValue;
        newParagraph.innerHTML = `Создан элемент p ${selectorValue}`;
        newParagraph.style.cssText = cssStyles;

        document.body.appendChild(newParagraph);
    }
};

// объекты созданные с помощью конструктора на основе сласса DomElement
let newDiv = new DomElement('.<div>', '200px', '300px', 'yellow', '40px');
let newParagraph = new DomElement('#<p>', '100px', '300px', 'blue', '30px');

// вызов объектами метода createElem
newParagraph.createElem();
newDiv.createElem();
