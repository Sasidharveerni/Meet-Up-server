const express = require('express');

const router = express.Router();

const {getUser, createUser, updateUser, deleteUser} = require('../controllers/user')


router.get('/users', getUser);

router.post('/users', createUser);

router.patch('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router