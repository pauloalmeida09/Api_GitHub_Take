const Appsetting = require('../Configurations/appsettings.json');
const Jwt = require('jsonwebtoken');


class AuthenticationMethods {

    static GenerateToken(parameters, payload) {

        let dynamicKey = parameters;
        let payLoadKey = payload;
        let privateKey = parameters.referer;
        let dynamicKeyTimeBased = Date.now();

        let keyToCipher = JSON.stringify({
            dynamicKey,
            dynamicKeyTimeBased,
            payLoadKey,
            privateKey
        });

        let password = Appsetting.JwTPassword;

        let verifyOptions = {
            issuer: Appsetting.issuer,
            subject: Appsetting.subject,
            audience: Appsetting.audience,
            expiresIn: Appsetting.expiresIn
        };

        let unSignedTicket = {
            'Ticket': keyToCipher
        };

        let Token = Jwt.sign(unSignedTicket, password, verifyOptions);

        return Token;
    }

    static CheckToken(req, res, next) {

        try {

            let Token = req.headers['x-access-token'];

            let password = Appsetting.JwTPassword;

            let verifyOptions = {
                issuer: Appsetting.issuer,
                subject: Appsetting.subject,
                audience: Appsetting.audience,
                expiresIn: Appsetting.expiresIn
            };

            var legit = Jwt.verify(Token, password, verifyOptions);

            let Ticket = JSON.parse(legit.Ticket);

            if (Ticket.payLoadKey.company != Appsetting.company) {

                return res.status(401).send({
                    auth: false,
                    message: 'Unauthorized access attempt!'
                });
            }
            if (Ticket.payLoadKey.password != Appsetting.password) {

                return res.status(401).send({
                    auth: false,
                    message: 'Unauthorized access attempt!'
                });
            }

            next();
        } catch (err) {
            return res.status(401).send({
                auth: false,
                message: err
            });
        }
    }


}
module.exports = AuthenticationMethods;