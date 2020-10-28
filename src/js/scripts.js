class Card {
    constructor(cardEl) {
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

    initialCard() {
        const listToDoCards = document.querySelector('.list-to-do');
        console.log(listToDoCards)
        const toDoCard = document.createElement('li');
        listToDoCards.appendChild(toDoCard);
        const liContent = `
        <div class="card">
            <div class="title-card">
            <h2>${this.projectName}</h2>
            </div>
            <div class="task-card">
            <p>${this.text}</p>
            </div>
            <div class="asignee-card">
            <p>${this.asignee}</p>
            </div>
        </div>
        `;
        toDoCard.innerHTML += liContent;
        // toDoCard.appendChild(liContent);
        console.log(this.projectName);
        console.log(this.text);
        console.log(this.asignee);

        
    }
    
    build() {
        const createBtn = document.querySelector('.createBtn');
        createBtn.addEventListener('click', this.initialCard.bind(this));
    }

}

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