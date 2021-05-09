const GitTakeBlipController = require('../Controllers/GitTakeBlipController');
var router = require('express').Router();

router.get('/ApiTake/User', GitTakeBlipController.GetUserTakeGit);
router.get('/ApiTake/Repos', GitTakeBlipController.GetReposTakeGit);
router.get('/ApiTake/ReposCSharp', GitTakeBlipController.GetReposCSharpTakeGit);

module.exports = router;