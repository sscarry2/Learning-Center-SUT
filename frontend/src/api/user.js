import api from './init';
import decodeJWT from 'jwt-decode';

const key = 'userToken';
const token = localStorage.getItem(key);

export function Users() {
  return api.get('/user').then(res => res.data);
}

export function UsersById() {
  if (token) {
    const decodedToken = decodeJWT(token);
    return api.get(`/user/${decodedToken.sub}`).then(res => res.data);
  } else {
    return null;
  }
}
