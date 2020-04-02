class RoomView extends View {
    constructor(element){
        super(element);
    }

    generateHTML = (model) => `
        <div class="rooms-name">
            <h1>${model.room_name}</h1>
        </div>
    `;
}