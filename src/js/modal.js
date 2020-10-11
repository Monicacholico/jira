class DOMHelper {
    static clearEventListeners(element){
        const cloneElement = element.cloneNode(true);
        element.replaceWith(cloneElement);
        return cloneElement;
    }
    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
        element.scrollIntoView({behavior: 'smooth'});
    }
}

class Component {
    constructor(hostElementId, insertBefore = false){
        if(hostElementId){
            this.hostElement = document.getElementById(hostElementId);
        } else {
            this.hostElement = document.body;
        }
        this.insertBefore = insertBefore;
    }
    detach() {
        if(this.element) {
            this.element.remove();
            // this.element.parentElement.removeChild(this.element); for old browsers
        }
    }
    show(){
        this.hostElement.insertAdjacentElement(
            this.insertBefore ? 'afterbegin': 'beforeend', 
            this.element)
    }
}


class Modal extends Component {
    constructor(modalEl)  {
        super(hostElementId);
        this.text = modalEl.text;
        this.create();
    }


    build() {
        const modalElement = document.createElement('div');
        modalElement.className = 'initial-modal';
        const modalTemplate = document.getElementById('new-modal');
        const modalBody = document.importNode(modalTemplate.content, true);
        modalBody.querySelector('p').textcontent = this.text;
        modalElement.appendChild(modalBody);
        console.log('im working');
    }

    create() {
        const createBtn = document.querySelector('.createBtn');
        createBtn.addEventListener('click', this.build);
    }

}

new Modal({});