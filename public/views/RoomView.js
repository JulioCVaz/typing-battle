import View from '../views/View.js';
class RoomView extends View {
    constructor(element){
        super(element);
    }

    generateHTML = (model) => `
        <div class="rooms-name">
            <h1>${model.room_name}</h1>
            <div>
                <h2>${model.user_nickname}</h2>
            </div> 
        </div>
    `;
}

export default RoomView;