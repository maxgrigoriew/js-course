"use strict"

class First {
    construstor() {}
    hello() {
        console.log('Привет это я метод родителя!')
    }
};

class Second extends First {
    constructor() {
        super();
    }
    hello() {
        super.hello();
        console.log('А это я наследующий метод')
    }
};

const second = new Second();

second.hello();