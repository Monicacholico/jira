class Modal {
    constructor() {
        this.createBtn = document.querySelector('.createBtn');
    }

    build() {
        
    }

}


import { ProjectList } from '../src/app/projectList.js';

globalThis.DEFAULT_VALUE = 'MAX';

class App {
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectList.setSwitchHandlerFunction(
            finishedProjectsList.addProject.bind(finishedProjectsList)
            );
        finishedProjectsList.setSwitchHandlerFunction(
            activeProjectList.addProject.bind(activeProjectList)
            );  
        // this.startAnalytics();

        // const someScript = document.createElement('script');
        // someScript.textContent = 'alert("Hi there")';
        // document.head.append(someScript);

        const timerId = setTimeout(this.startAnalytics, 3000);
        document.getElementById('stop-analytics-btn').addEventListener('click', () => {
            clearTimeout(timerId);

        });

    }


        static startAnalytics() {
            const analyticsScript = document.createElement('script');            
            analyticsScript.src = 'scripts/utility/analytics.js';
            analyticsScript.defer = true;
            document.head.append(analyticsScript);
    }
}

App.init();