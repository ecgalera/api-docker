const router = require('express').Router();
const { createUserLogin } = require('./user_controller');

router.post('/', createUserLogin);

module.exports = router;
