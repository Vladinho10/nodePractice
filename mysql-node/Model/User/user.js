module.exports = function (pool) {
    return {
        getUser: function (callback) {
            pool.query("SELECT * FROM users", callback)
        },

        createUser: function (username, surname, email,password, callback){
            pool.query("INSERT INTO users SET ?", {
                username : username,
                surname  : surname,
                email    : email,
                password : password
            },callback);
        }
    }
}