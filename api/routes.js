const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/', controllers.hello);

// write your routes
router.get('/users', controllers.readAll);
router.post('/users', controllers.signUp);
router.post('/comments', controllers.leaveComments);
router.delete('/delete/:id', controllers.deleteComment)
router.put('/comment/edit', controllers.editComment);

module.exports = router;
