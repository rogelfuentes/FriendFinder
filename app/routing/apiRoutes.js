var tableData = require("../data/friends.js.js");

module.exports = function (app) {
    app.get("/api/tables", function (req, res) {
        res.json(tableData);
    });


    app.post("/api/survey", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            scoreResults: Infinity
        }

        var surveyResults = req.body
        var surveyScores = surveyResults.scores
        console.log(req.body);

        for (let i = 0; i < tableData.length; i++) {
            console.log(tableData[i]);
            const friendUser = tableData[i];
            var overalDifference = 0
            for (let j = 0; j < tableData[i].scores.length; j++) {
                const friendUserScores = tableData[i].scores[j];

                var currentUserDiff = Math.abs(surveyScores[j] - friendUserScores)
                overalDifference += currentUserDiff

            }
            if (overalDifference <= bestMatch.scoreResults) {
                bestMatch.name = friendUser.name
                bestMatch.photo = friendUser.facebookPhoto
                bestMatch.scoreResults = overalDifference
            }
        }
        tableData.push(surveyResults);
        res.json(bestMatch);

    })
}