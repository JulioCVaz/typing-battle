class Player {
    constructor(id, nickname){
        this._id = id;
        this._nickname = nickname;
        Object.freeze(this);
    }
    
    get id(){
        return this._id;
    }

    get nickname(){
        return this._nickname;
    }

}