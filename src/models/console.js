import axios from 'axios';
const url = `https://game-picker-db.herokuapp.com/consoles/`

class ConsoleModel {
  static all = () => {
    let request = axios.get(url);
    return request;
  };

  static getOne = (id) => {
    let request = axios.get(`${url}${id}`);
    return request;
  };
};

export default ConsoleModel;
