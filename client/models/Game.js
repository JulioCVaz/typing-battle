class Game {
    constructor(language, player1, player2){
        this._id = GeneratorID.create_UUID();
        this._hash_session = "encrypt";
        this._id_winner = null;
        this._language = language;
        this._players = [player1, player2];
        this._players_points = [];
        this._time = 0;
    }

    get id(){
        return this._id;
    }

    get hash_session(){
        return this._hash_session;
    }

    set time(time = 60){
        this._time = time;
        initCount(); 
    }

    // implements player_points

    initCount(){
        setInterval(() => {
            this._time = --this._time;
        }, 1000);
    }

}