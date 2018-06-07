module.exports = function (user) {
    return {
        index: function () {
            var data = {};
            user.getUser(function (err, rows) {
                data = {
                    username: rows[0].username,
                    surname: rows[0].surname,
                    email: rows[0].email
                };
                res.render("index", {
                    user: data
                });
            });
        },
        indexPost: function (req, res) {
            
        }
    }
}
