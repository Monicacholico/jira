class Modal {
    constructor(elem) {
        this.currElement = elem;
        this.targetId = elem.getAttribute('data-modal-id');
        this.overlay = document.getElementById(this.targetId);
        this.modalElement = document.querySelector(`${this.targetId} + .modal`);
        this.firstCloseButton = document.querySelector(`${this.targetId} + [data-modal-close]`);
        this.closeButtons = document.querySelectorAll(`${this.targetId} + [data-modal-close]`);
        this.body = document.querySelector('body');
        this.handleEscapeKey = this.handleEscapeKey.bind(this);
        this.handleFocusTrap = this.handleFocusTrap.bind(this);
        this.allInstances = [];
        this.allInstances.push(this);
        this.build(elem);
        this.isOpen = false;
    }

    buid(modalLink) {
        const self = this;
        this.validateSelector(modalLink);
        self.modalElement.setAttribute('aria-hidden', 'true');
        this.handleTabIndex(this.overlay, 'close');
        modalLink.addEventListener('click', function() {
            self.openModal();
        });
        self.initializeCloseevents(this.closeButtons);
    };


    openModal() {

    }


}

class ProjectItem {}

class ProjectList {}

class App {}

