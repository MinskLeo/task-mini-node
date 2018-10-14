const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
const SECRET_CONFIG = require('../Configs/secret.json');

class AuthService {
  static generateKey (payload) {
    const token = jwt.sign({...payload}, SECRET_CONFIG.SECRET);
    return token;
  }

  static verifyKey (token) {
    const data = jwt.verify(jwt, SECRET_CONFIG.SECRET);
    return data;
  }

  static hashPassword (password) {
    if(typeof password==='string') {
      return cryptojs.SHA256(password).toString();
    }

    return null;
  }
}

module.exports = AuthService;