var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users.js');

/* GET users listing. */

router.post('/',usersController.addUser);
router.get('/',usersController.listUsers);
router.get('/:userId',usersController.getUser);
router.delete('/:userId',usersController.deleteUser);
router.patch('/:userId',usersController.editUser);

module.exports = router;
