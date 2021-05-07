'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function () {
    function Card(cardEl) {
        _classCallCheck(this, Card);

        // this.createBtn = document.querySelector('.createBtn');
        // console.log(this.createBtn);
        this.toDoBoard = document.querySelector('.to-do');
        this.projectName = cardEl.projectName;
        this.text = cardEl.text;
        this.date = new Date();
        this.asignee = cardEl.asignee;
        // this.initialCard();
        this.build();
    }

    _createClass(Card, [{
        key: 'initialCard',
        value: function initialCard() {
            var listToDoCards = document.querySelector('.list-to-do');
            console.log(listToDoCards);
            var toDoCard = document.createElement('li');
            listToDoCards.appendChild(toDoCard);
            var liContent = '\n        <div class="card">\n            <div class="title-card">\n            <h2>' + this.projectName + '</h2>\n            </div>\n            <div class="task-card">\n            <p>' + this.text + '</p>\n            </div>\n            <div class="asignee-card">\n            <p>' + this.asignee + '</p>\n            </div>\n        </div>\n        ';
            toDoCard.innerHTML += liContent;
            // toDoCard.appendChild(liContent);
            console.log(this.projectName);
            console.log(this.text);
            console.log(this.asignee);
        }
    }, {
        key: 'build',
        value: function build() {
            var createBtn = document.querySelector('.createBtn');
            createBtn.addEventListener('click', this.initialCard.bind(this));
        }
    }]);

    return Card;
}();

new Card({
    projectName: 'First Project',
    text: 'My first task explained',
    asignee: 'Monica'
});

// import { ProjectList } from '../src/app/projectList.js';

// globalThis.DEFAULT_VALUE = 'MAX';

// class App {
//     static init() {
//         const activeProjectList = new ProjectList('active');
//         const finishedProjectsList = new ProjectList('finished');
//         activeProjectList.setSwitchHandlerFunction(
//             finishedProjectsList.addProject.bind(finishedProjectsList)
//             );
//         finishedProjectsList.setSwitchHandlerFunction(
//             activeProjectList.addProject.bind(activeProjectList)
//             );  
//         // this.startAnalytics();

//         // const someScript = document.createElement('script');
//         // someScript.textContent = 'alert("Hi there")';
//         // document.head.append(someScript);

//         const timerId = setTimeout(this.startAnalytics, 3000);
//         document.getElementById('stop-analytics-btn').addEventListener('click', () => {
//             clearTimeout(timerId);

//         });

//     }


//     //     static startAnalytics() {
//     //         const analyticsScript = document.createElement('script');            
//     //         analyticsScript.src = 'scripts/utility/analytics.js';
//     //         analyticsScript.defer = true;
//     //         document.head.append(analyticsScript);
//     // }
// }

// App.init();