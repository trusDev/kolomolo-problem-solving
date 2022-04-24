const userAPI = require("./users.js");

const users = {
    // TODO: connect to proper API later
    get: id => {
        return userAPI.get(id);
    }
  }

module.exports = {
  users
}
