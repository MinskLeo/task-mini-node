const DBCONFIG = require('../Configs/db.json');
const ShemasConnector = require('../Schemas');
const ObjectID = require('mongoose/lib/drivers/node-mongodb-native/objectid');
const { TABLES } = DBCONFIG;

module.exports = class DBService {
  static connect (dbController) {
    dbController.connect(`mongodb://${DBCONFIG.HOST}/${DBCONFIG.DATABASE}`, err => {
      if(err) throw err;
    });

    return ShemasConnector(dbController);
  }

  static findUserLoginPass (shemas, nickname, password) {
    if(nickname && password) {
      const queryUserFind = shemas.User.findOne({ nickname, password },{ password: 0 });
      return queryUserFind.exec();
    }

    return null;
  }

  static findUserById (shemas, id) {
    if (ObjectID.isValid(id)) {
      const queryUserFind = shemas.User.findOne({_id: id}, { password: 0 });
      return queryUserFind.exec();
    }

    return null;
  }

  static findRolesById (shemas, ids) {
    if(ids) {
      const queryRolesFind = shemas.UserRole.find({ _id: { $in: ids } });
      return queryRolesFind.exec();
    }

    return null;
  }
}