const AuthenticationMethods = require('../Methods/Authetication');

exports.Token = function Token (req, res){

    let parameters = {
        rota: req.route,
        host: req.hostname,
        origin: req.headers.origin,
        methodCalled: req.url,
        referer: req.headers.referer
    };

    let payload = {
        company: req.body.company,
        password: req.body.password
    }


    res.status(200).json({
        "Token": AuthenticationMethods.GenerateToken(parameters,payload)
    });
};