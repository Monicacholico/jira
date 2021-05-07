'use strict';

(function () {

    // function ProjectList(project) {
    //     this.currentProj = project;
    //     this.targetId = project.getAttribute('data-project-id');
    //     this.projectlay = document.getElementById(this.targetId);
    //     this.projectElement = document.querySelector('#' + this.targetId + ' .project');
    //     this.allInstances.push(this);
    //     this.displayProject();
    //     // this.isOpen(false);
    // }

    // ProjectList.prototype.displayProject = function () {
    //     const self = this;
    //     const modalBody = document.querySelector('.modal-body');
    //     console.log(modalBody);
    //     const projectListDiv = document.querySelector('.list-projects');
    //     const inputProject = modalBody.querySelector('input');

    //     inputProject.addEventListener('click', function(){
    //         project = projectListDiv;
    //         console.log(projectListDiv);
    //         if(project.classList.contains('displayed')) {
    //             project.remove.classList('displayed');
    //         }
    //         project.classList.add('displayed');
    //     });


    // }

})();

var modalBody = document.querySelector('.modal-body');
console.log(modalBody);
var projectListDiv = document.querySelector('.list-projects');
console.log(projectListDiv);
var inputProject = modalBody.querySelector('input');
console.log(inputProject);
var btndownArrow = modalBody.querySelector('.btn-project-displayer');

inputProject.addEventListener('click', function (e) {
    projectListDiv.classList.remove('no-display');
});
btndownArrow.addEventListener('click', function () {
    projectListDiv.classList.remove('no-display');
    projectListDiv.classList.add('no-display');
});

projectListDiv.addEventListener('click', function (e) {
    var target = e.target;
    console.log(target.tagName);
    if (target.tagName === 'LI') {
        inputProject.setAttribute('placeholder', target.textContent);
        projectListDiv.classList.add('no-display');
    }
    if (target.tagName === 'UL') {
        console.log(target.firstElementChild);
        inputProject.setAttribute('placeholder', target.firstElementChild.textContent);
    }
});