import { create_UUID } from '../helpers/GeneratorID.js';
import Room from '../models/Room.js';
import RoomView from '../views/RoomView.js';

class RoomController {
    constructor(){
        this._uuid = create_UUID();
        this._roomView = new RoomView(document.querySelector('.battle-container'));
    }

    createRoom = nickname => {
      
        if(!nickname) return alert('Problema ao criar sala');

        const room = new Room(this._uuid, nickname);
        room.room_name = `${Math.floor(Math.random() * 100000)}#${nickname}`;
    
        this._roomView.update(room);
    }

}

export default RoomController;