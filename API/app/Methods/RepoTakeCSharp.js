exports.FilterReposCSharp = (repos) => {
    let lodash = require("lodash");
    let languageCSharp;
    let sortedDateCSharp;

    languageCSharp = repos.filter(function (ob) {
        return ob.language == "C#"
    })
    sortedDateCSharp = languageCSharp.slice().sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))

    return sortedDateCSharp.slice(0,5);


}