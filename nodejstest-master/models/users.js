module.exports = {
  get: function (id) {
    const users = {
        1: { // CHANGE
          name: "Test User",
          email: "test@user.com"
        }
      }

    return users[id];
  }
};
