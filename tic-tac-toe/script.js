// const personFactory = (name, age) => {
//     const sayHello = () => console.log('hello!');
//     return { name, age, sayHello };
// };
  
// const jeff = personFactory('jeff', 27);
  
// console.log(jeff.name); // 'jeff'
  

// jeff.sayHello(); // calls the function and logs 'hello!'

// console.log(jeff); // 'jeff'

// var sayHello = function (name) {
//     var text = 'Hello, ' + name;
//     return function () {
//       console.log(text);
//     };
// };

// sayHello('Todd'); // nothing happens, no errors, just silence...

// var helloTodd = sayHello('Todd');
// helloTodd(); // will call the closure and log 'Hello, Todd'

// sayHello('Bob')(); // calls the returned function without assignment

// const Player = (name, level) => {
//     let health = level * 2;
//     const getLevel = () => level;
//     const getName  = () => name;
//     const die = () => {
//       // uh oh
//     };
//     const damage = x => {
//       health -= x;
//       if (health <= 0) {
//         die();
//       }
//     };
//     const attack = enemy => {
//       if (level < enemy.getLevel()) {
//         damage(1);
//         console.log(`${enemy.getName()} has damaged ${name}`);
//       }
//       if (level >= enemy.getLevel()) {
//         enemy.damage(1);
//         console.log(`${name} has damaged ${enemy.getName()}`);
//       }
//     };
//     return {attack, damage, getLevel, getName};
//   };
  
//   const jimmie = Player('jim', 10);
//   const badGuy = Player('jeff', 5);
//   jimmie.attack(badGuy);
//   jimmie.die();


// var myModule = (function() {
// 'use strict';

// var _privateProperty = 'Hello World';
// var publicProperty = 'I am a public property';

// function _privateMethod() {
//     console.log(_privateProperty);
// }

// function publicMethod() {
//     _privateMethod();
// }

// return {
//     publicMethod: publicMethod,
//     publicProperty: publicProperty
// };
// })();

// myModule.publicMethod(); // outputs 'Hello World'
// console.log(myModule.publicProperty); // outputs 'I am a public property'
// console.log(myModule._privateProperty); // is undefined protected by the module closure
// myModule._privateMethod(); // is TypeError protected by the module closure


const btnX = document.getElementById('btnX');
const btnO = document.getElementById('btnO');

const X = document.getElementById('X');
const O = document.getElementById('O');

const square_1 = document.getElementById('square1');
const square_2 = document.getElementById('square2');
const square_3 = document.getElementById('square3');
const square_4 = document.getElementById('square4');
const square_5 = document.getElementById('square5');
const square_6 = document.getElementById('square6');
const square_7 = document.getElementById('square7');
const square_8 = document.getElementById('square8');
const square_9 = document.getElementById('square9');

const restartBtn = document.getElementById('restart');

const boxContainer = document.getElementById('boxContainer');
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;

let choise = 'X';

let hashDict = {
    square1: "",
    square2: "",
    square3: "",
    square4: "",
    square5: "",
    square6: "",
    square7: "",
    square8: "",
    square9: "",
};

let parentNodesList = [];
parentNodesList.push(square_1);
parentNodesList.push(square_2);
parentNodesList.push(square_3);
parentNodesList.push(square_4);
parentNodesList.push(square_5);
parentNodesList.push(square_6);
parentNodesList.push(square_7);
parentNodesList.push(square_8);
parentNodesList.push(square_9);

let playerList = [];

function buttonO() {
    btnO.style.opacity = '1';
    btnO.style.border = '2px solid black';
    btnO.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)';

    btnX.style.opacity = '0.5';
    btnX.style.border = '1px solid grey';
    btnX.style.boxShadow = 'none';

    restart();
    choise = 'O';
};

function buttonX() {
    btnX.style.opacity = '1';
    btnX.style.border = '2px solid black';
    btnX.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)';

    btnO.style.opacity = '0.5';
    btnO.style.border = '1px solid grey';
    btnO.style.boxShadow = 'none';

    restart();
    choise = 'X';
};

function selection_square(e) {
    for (let key in hashDict) {
        if (key === e) {
            if (hashDict[key] === "") {
                const div = document.createElement("div");
                if (choise === 'X') {
                    hashDict[key] = 'X';
                    const xClone = X.cloneNode(true);
                    xClone.setAttribute('id','x1');
                    xClone.classList.add('X');
                    xClone.style.display = 'block';
                    setTimeout(function() {
                        xClone.style.opacity = "1";
                      }, 10);
                    div.classList.add("square-item");
                    div.appendChild(xClone); 
                    return div;                            
                } else {
                    hashDict[key] = 'O';
                    const oClone = O.cloneNode(true);
                    oClone.setAttribute('id','o1');
                    oClone.classList.add('O');
                    oClone.style.display = 'block';
                    setTimeout(function() {
                        oClone.style.opacity = "1";
                      }, 10);
                    div.classList.add("square-item");
                    div.appendChild(oClone);
                    return div;
                } 
            } 
        }    
    } 
};

function bot_selection_square(e) {
    for (let key in hashDict) {
        if (key === e) {
            if (hashDict[key] === "") {
                const div = document.createElement("div");
                if (choise === 'X') {  
                    hashDict[key] = 'O';
                    const oClone = O.cloneNode(true);
                    oClone.setAttribute('id','o1');
                    oClone.classList.add('O');
                    oClone.style.display = 'block';
                    setTimeout(function() {
                        oClone.style.opacity = "1";
                    }, 10);
                    div.classList.add("square-item");
                    div.appendChild(oClone);
                    return div;
                } else {
                    hashDict[key] = 'X';
                    const xClone = X.cloneNode(true);
                    xClone.setAttribute('id','x1');
                    xClone.classList.add('X');
                    xClone.style.display = 'block';
                    setTimeout(function() {
                        xClone.style.opacity = "1";
                    }, 10);
                    div.classList.add("square-item");
                    div.appendChild(xClone); 
                    return div;
                } 
            } 
        }    
    } 
};

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
};

function restart() {
    for (var i = 0; i < parentNodesList.length; i++) {
        removeAllChildNodes(parentNodesList[i]);    
    }
    hashDict = {
        square1: "",
        square2: "",
        square3: "",
        square4: "",
        square5: "",
        square6: "",
        square7: "",
        square8: "",
        square9: "",
    };
    playerList = [];
};

const result = document.getElementById('result-container');
const answer_x = document.getElementById('answer-x');
const answer_o = document.getElementById('answer-o');
const animated_text = document.getElementById('animated-text');

function winner() {
    if (playerList.includes(one)) {
        if (playerList.includes(two)) {
            if (playerList.includes(three)) {
                setTimeout(function() {
                    boxContainer.style.filter = "blur(7px)";
                    result.style.display = 'block';
                }, 10);
                if (choise === 'X') {
                    setTimeout(function() {
                        answer_x.style.opacity = '1';
                    }, 1500);
                } else {
                    setTimeout(function() {
                        answer_o.style.opacity = '1';
                    }, 1500);
                }
            }
        } else if (playerList.includes(four)) {
            if (playerList.includes(seven)) {
                setTimeout(function() {
                    boxContainer.style.filter = "blur(7px)";
                    result.style.display = 'block';
                }, 10);
                if (choise === 'X') {
                    setTimeout(function() {
                        answer_x.style.opacity = '1';
                    }, 1500);
                } else {
                    setTimeout(function() {
                        answer_o.style.opacity = '1';
                    }, 1500);
                }
            }
        } else if (playerList.includes(five)) {
            if (playerList.includes(nine)) {
                setTimeout(function() {
                    boxContainer.style.filter = "blur(7px)";
                    result.style.display = 'block';
                }, 10);
                if (choise === 'X') {
                    setTimeout(function() {
                        answer_x.style.opacity = '1';
                    }, 1500);
                } else {
                    setTimeout(function() {
                        answer_o.style.opacity = '1';
                    }, 1500);
                }
            }
        } 
    } 
    if(playerList.includes(two)) {
        if (playerList.includes(five)) {
            if (playerList.includes(eight)) {
                setTimeout(function() {
                    boxContainer.style.filter = "blur(7px)";
                    result.style.display = 'block';
                }, 10);
                if (choise === 'X') {
                    setTimeout(function() {
                        answer_x.style.opacity = '1';
                    }, 1500);
                } else {
                    setTimeout(function() {
                        answer_o.style.opacity = '1';
                    }, 1500);
                }
            }
        }
    } 
    if(playerList.includes(three)) {
        if (playerList.includes(six)) {
            if (playerList.includes(nine)) {
                setTimeout(function() {
                    boxContainer.style.filter = "blur(7px)";
                    result.style.display = 'block';
                }, 10);
                if (choise === 'X') {
                    setTimeout(function() {
                        answer_x.style.opacity = '1';
                    }, 1500);
                } else {
                    setTimeout(function() {
                        answer_o.style.opacity = '1';
                    }, 1500);
                }
            }
        } else if (playerList.includes(five)) {
            if (playerList.includes(seven)) {
                setTimeout(function() {
                    boxContainer.style.filter = "blur(7px)";
                    result.style.display = 'block';
                }, 10);
                if (choise === 'X') {
                    setTimeout(function() {
                        answer_x.style.opacity = '1';
                    }, 1500);
                } else {
                    setTimeout(function() {
                        answer_o.style.opacity = '1';
                    }, 1500);
                }
            }
        }
    } 
    if(playerList.includes(four)) {
        if (playerList.includes(five)) {
            if (playerList.includes(six)) {
                setTimeout(function() {
                    boxContainer.style.filter = "blur(7px)";
                    result.style.display = 'block';
                }, 10);
                if (choise === 'X') {
                    setTimeout(function() {
                        answer_x.style.opacity = '1';
                    }, 1500);
                } else {
                    setTimeout(function() {
                        answer_o.style.opacity = '1';
                    }, 1500);
                }
            }
        }
    } 
    if(playerList.includes(seven)) {
        if (playerList.includes(eight)) {
            if (playerList.includes(nine)) {
                setTimeout(function() {
                    boxContainer.style.filter = "blur(7px)";
                    result.style.display = 'block';
                }, 10);
                if (choise === 'X') {
                    setTimeout(function() {
                        answer_x.style.opacity = '1';
                    }, 1500);
                } else {
                    setTimeout(function() {
                        answer_o.style.opacity = '1';
                    }, 1500);
                }
            }
        }
    }
};

result.addEventListener("click",function() {
    if (boxContainer.style.filter === "blur(7px)") {
        result.style.display = 'none';
        setTimeout(function() {
            boxContainer.style.filter = "blur(0)";
            answer_x.style.opacity = '0';
            answer_o.style.opacity = '0';
        }, 0);
        restart();
    }
});

btnO.addEventListener("click",buttonO);
btnX.addEventListener("click",buttonX);

const squares = ['square1', 'square2', 'square3', 'square4', 'square5', 'square6', 'square7', 'square8', 'square9'];

function getRandomArrayItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


square_1.addEventListener("click",function() {
    let id = this.id;
    let divClone = selection_square(id);
    square_1.appendChild(divClone);
    playerList.push(one);

    const itemToRemove = id;
    const filteredSquares = squares.filter(item => item !== itemToRemove);
    const randomSquare = getRandomArrayItem(filteredSquares);

    const lastCharacter = randomSquare.charAt(randomSquare.length - 1);
    for (let i = 0; i < parentNodesList.length; i++) {
        let item = parentNodesList[i];
        let itemId = item.id;
        let lastCharacterItem = itemId.charAt(itemId.length - 1);
        if (lastCharacterItem === lastCharacter) {
            id = itemId
            setTimeout(function() {
                divClone = bot_selection_square(id);
                item.appendChild(divClone);
            }, 1000);
        }
    }
    winner();
    }
);

square_2.addEventListener("click",function() {
    let id = this.id;
    let divClone = selection_square(id);
    square_2.appendChild(divClone);
    
    playerList.push(two);
    winner();
    }
);

square_3.addEventListener("click",function() {
    let id = this.id;
    let divClone = selection_square(id);
    square_3.appendChild(divClone);
    
    playerList.push(three);
    winner();
    }
);

square_4.addEventListener("click",function() {
    let id = this.id;
    let divClone = selection_square(id);
    square_4.appendChild(divClone);
    
    playerList.push(four);
    winner();
    }
);

square_5.addEventListener("click",function() {
    let id = this.id;
    let divClone = selection_square(id);
    square_5.appendChild(divClone);
    
    playerList.push(five);
    winner();
    }
);

square_6.addEventListener("click",function() {
    let id = this.id;
    let divClone = selection_square(id);
    square_6.appendChild(divClone);
    
    playerList.push(six);
    winner();
    }
);

square_7.addEventListener("click",function() {
    let id = this.id;
    let divClone = selection_square(id);
    square_7.appendChild(divClone);
    
    playerList.push(seven);
    winner();
    }
);

square_8.addEventListener("click",function() {
    let id = this.id;
    let divClone = selection_square(id);
    square_8.appendChild(divClone);
    
    playerList.push(eight);
    winner();
    }
);

square_9.addEventListener("click",function() {
    let id = this.id;
    let divClone = selection_square(id);
    square_9.appendChild(divClone);
    
    playerList.push(nine);
    winner();
    }
);

restartBtn.addEventListener("click",restart);


    

