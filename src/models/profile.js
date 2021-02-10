import axios from 'axios';
const url = `https://game-picker-db.herokuapp.com/profiles/`

class ProfileModel {
  static all = () => {
    let request = axios.get(url);
    return request;
  };

  static getOne = (id) => {
    let request = axios.get(`${url}${id}`);
    return request;
  };

  static create = (profile) => {
    let request = axios.post(url, profile);
    return request;
  };

  static delete = (profile) => {
    let request = axios.delete(`${url}${profile._id}`);
    return request;
  };

  static update = (profile) => {
    let request = axios.put(`${url}${profile._id}`, profile);
    return request;
  };
};

export default ProfileModel;
