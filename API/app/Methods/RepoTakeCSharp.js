exports.FilterReposCSharp = (repos) => {
    try {
        let lodash = require("lodash");
        let languageCSharp;
        let sortedDateCSharp;
        var arrayFiveRepo = [];

        languageCSharp = repos.filter(function (ob) {
            return ob.language == "C#"
        })

        if (languageCSharp.lenght < 4) {
            return languageCSharp
        } else {
            sortedDateCSharp = languageCSharp.slice().sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
            sortedDateCSharp.slice(0, 5).reverse();
            return sortedDateCSharp;
        }
    } catch (err) {
        return res.status(401).send({
            auth: false,
            message: err
        });
    }


}