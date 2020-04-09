class View {
    constructor(element){
        this._element = element;
    }

    generateHTML = () => { throw new Error('This method cannot be implemented') };

    update = (model) => this._element.innerHTML = this.generateHTML(model);
}

export default View;