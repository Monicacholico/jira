class Modal {
    constructor(modalEl)  {
        this.text = modalEl.text;
        this.create();
    }


    build() {
        const modalElement = document.createElement('div');
        modalElement.className = 'initial-modal';
        const modalTemplate = document.getElementById('new-modal');
        const modalBody = document.importNode(modalTemplate.content, true);
        modalBody.querySelector('p').textcontent = this.text;
        modalElement.append(modalBody);
        console.log('im sorking');
    }

    create() {
        const createBtn = document.querySelector('.createBtn');
        createBtn.addEventListener('click', this.build);
    }

}

new Modal({});