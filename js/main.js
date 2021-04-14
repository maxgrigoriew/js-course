"use strict"


let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n) ;
  };

function guessNum () {
    // let hiddenNum = Math.ceil(Math.random() * 100);
    let hiddenNum = 55;
    
    console.log(hiddenNum);
    
    function guessNumInner () {
        
        let userNum = prompt('Угадай число от 1 до 100');

        if (!isNumber(userNum) && userNum){
            alert('Введи число!');
            return guessNum();
        }
        
        else if (!userNum) {
            return alert('Игра окончена');
        }

        else if (userNum > hiddenNum) {
            alert('Загаданное число меньше');
            return guessNum();
        }
            
        else if (userNum < hiddenNum) {
        alert('Загаданное число больше');
        return guessNum();
        }

        else if (hiddenNum == userNum) {
            return alert('Поздравляю, Вы угадали!!!');
        }
        
    }

    guessNumInner();

};

guessNum();