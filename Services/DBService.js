const DBCONFIG = require('../Configs/db.json');
const ShemasConnector = require('../Schemas');
const { TABLES } = DBCONFIG;

module.exports = class DBService {
  static connect (dbController) {
    dbController.connect(`mongodb://${DBCONFIG.HOST}/${DBCONFIG.DATABASE}`, err => {
      if(err) throw err;
    });

    return ShemasConnector(dbController);
  }

  static findUserLoginPass (shemas, nickname, password) {
    // console.log('SHEMAS: ', shemas)
    console.log('NICKNAME: ', nickname)
    console.log('PASSWORD: ', password)
    const queryUserFind = shemas.User.findOne({ nickname, password });
    return queryUserFind.exec();
  }
}