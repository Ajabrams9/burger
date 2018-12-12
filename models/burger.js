
var orm = require("../config/orm.js")

var burger = {
    selectAll: function (callback) {
        orm.selectAll(function (result, err) {
            if (err) {
                throw err;
              }
              callback(result);
        });
    },

    insertOne: function (burger_name, callback) {
        orm.insertOne(burger_name, function (res) {
            callback(res);
        });
    },

    updateOne: function (burger_id, callback) {
        orm.updateOne(burger_id, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;