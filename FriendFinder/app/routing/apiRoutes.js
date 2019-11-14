var tableData = require("../data/friends.js");

module.exports = function (app) {
    app.get("../data/friends.js", function (req, res) {
        res.json(tableData);
    });
}