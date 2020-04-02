class RoomController{
    constructor(){
        this._uuid = GeneratorID.create_UUID();
    }

    createRoom(e){
        e.preventDefault();
        const nickname = document.getElementById('user-nickname').value;
        if(nickname){
            const room = new Room(this._uuid, nickname);
            room.room_name = `${Math.floor(Math.random() * 100000)}#${nickname}`;
        }
    }

}