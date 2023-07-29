const express = require('express')
const router = express.Router()
const gameWatchController = require('../controllers/gameWatchController')

router.route('/addGame')
    .post(gameWatchController.addGame)

router.route('/getGameList')
    .get(gameWatchController.getGameList)
    

module.exports = router