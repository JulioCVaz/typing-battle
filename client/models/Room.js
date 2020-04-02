/**
 * this class is responsable to generate room name and return the owner nickname
 */

class Room {
    
    constructor(id, nickname, room_name=''){
        this._id = id;
        this._room_name = room_name;
        this._user_nickname = nickname;
    }

    get id(){
        return this._id;
    }

    get room_name(){
        return this._room_name;
    }

    get user_nickname(){
        return this._user_nickname;
    }

    set room_name(room_name){
        return this._room_name = room_name;
    }

}