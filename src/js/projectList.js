(function() {
    
    function ProjectList(project) {
        this.currentProj = project;
        this.targetId = project.getAttribute('data-project-id');
        this.projectlay = document.getElementById(this.targetId);
        this.projectElement = document.querySelector('#' + this.targetId + ' .project');
        this.allInstances.push(this);
        this.displayProject();
        // this.isOpen(false);
    }

    ProjectList.prototype.displayProject = function () {
        const self = this;
        const modalBody = document.querySelector('.modal-body');
        console.log(modalBody);
        const projectListDiv = document.querySelector('.list-projects');
        const inputProject = modalBody.querySelector('input');

        inputProject.addEventListener('click', function(){
            project = projectListDiv;
            console.log(projectListDiv);
            if(project.classList.contains('displayed')) {
                project.remove.classList('displayed');
            }
            project.classList.add('displayed');
        });


    }

})();    
