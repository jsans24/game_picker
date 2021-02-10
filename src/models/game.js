import axios from 'axios';
const url = `https://game-picker-db.herokuapp.com/games/`

class GameModel {
  static all = () => {
    let request = axios.get(url);
    return request;
  };

  static getOne = (id) => {
    let request = axios.get(`${url}${id}`);
    return request;
  };
};

export default GameModel;
