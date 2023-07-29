const asyncHandler = require('express-async-handler');

/**
 * CRUD operations for Blog Posts. 
 * For now there should only be a create, delete, and retrieve operations.
 */

const gameList = []; //usually this should be stored on a db or something like redux..., but storing here for this app
/**
 * create game
 */
const addGame = asyncHandler(async(req,res) => {
    const gameName = req.body.game;

    gameList.push(gameName);

    res.status(201).json({ 
        message: `New Game added: ${gameName}` 
    })

})

const getGameList = asyncHandler(async(req,res) => {
    res.status(200).json({
        gameList: gameList
    })
})

module.exports = {
    addGame,
    getGameList
}