import RoomController from './controllers/RoomController.js';

window.onload = function(){
    let nickname = prompt("Digite seu nickname:");
    let roomController = new RoomController();
    roomController.createRoom(nickname);
}