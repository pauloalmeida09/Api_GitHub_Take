var appsetting = require('../Configurations/appsettings.json');
const fetch = require("node-fetch");
const RepoTakeCSharp = require('../Methods/RepoTakeCSharp');

exports.Ping = function Ping(req, res) {

    var pingRet = {
        response: 'Ping!'
    }
    res.status(200).json(pingRet);
};


exports.GetUserTakeGit = function GetUserTakeGit(req, res) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(
        appsetting.hostGit + "/users/" + appsetting.company,
        requestOptions
    )
        .then(response => response.json())
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
};
exports.GetReposTakeGit = function GetReposTakeGit(req, res) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch(
        appsetting.hostGit + "/users/" + appsetting.company + "/repos",
        requestOptions
    )
        .then(response => response.json())
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
};

exports.GetReposCSharpTakeGit = function GetReposCSharpTakeGit(req, res) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(
        appsetting.hostGit + "/users/" + appsetting.company + "/repos",
        requestOptions
    )
        .then(response => response.json())
        .then(result => {

            var filter = RepoTakeCSharp.FilterReposCSharp(result);
            res.status(200).json(filter);
        })
        .catch(error => {
            res.status(500).json(error);
        });
};





