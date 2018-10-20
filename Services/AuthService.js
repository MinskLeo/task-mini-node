const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js');
const SECRET_CONFIG = require('../Configs/secret.json');
const DBService = require('./DBService');

class AuthService {
  static generateKey (payload) {
    const token = jwt.sign({ ...payload }, SECRET_CONFIG.SECRET, {
      expiresIn: SECRET_CONFIG.EXPIRES_IN
    });
    return token;
  }

  static verifyKey (token) {
    try {
      const data = jwt.verify(token, SECRET_CONFIG.SECRET);  
      return {
        isValid: true,
        data: data
      }
    } catch (error) {
      console.log('TOKEN IS NOT VALID!');
      return {
        isValid: false,
        data: null
      };
    }
  }

  static async verifyAuth (shemas, token) {
    const untoken = this.verifyKey(token);
    if(untoken && untoken.isValid && untoken.data) {
      const { nickname, password } = untoken.data;
      const user = await DBService.findUserLoginPass(shemas, nickname, password);
      if(user) {
        return user;
      }

      return false;
    }
    
    return false;
  }

  static hashPassword (password) {
    if(typeof password==='string') {
      return cryptojs.SHA256(password).toString();
    }

    return null;
  }
}

module.exports = AuthService;