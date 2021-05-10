const GitTakeBlipController = require('../Controllers/GitTakeBlipController');
const AuthenticationController = require('../Controllers/AutheticatioController');
const AuthenticationMethods = require('../Methods/Authetication');
const router = require('express').Router();

router.post('/ApiTake/Token', AuthenticationController.Token);

router.get('/ApiTake/User', AuthenticationMethods.CheckToken, GitTakeBlipController.GetUserTakeGit);
router.get('/ApiTake/Repos', AuthenticationMethods.CheckToken, GitTakeBlipController.GetReposTakeGit);
router.get('/ApiTake/ReposCSharp', AuthenticationMethods.CheckToken, GitTakeBlipController.GetReposCSharpTakeGit);

module.exports = router;