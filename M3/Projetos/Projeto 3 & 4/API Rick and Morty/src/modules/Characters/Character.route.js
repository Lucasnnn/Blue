const router = require('express').Router();
const chars = require('./Character.controller');

router.post('/create',chars.createCharacterController);
router.get('',chars.allCharactersController);
router.get('/find/:id',chars.characterIdController);
router.put('/update/:id',chars.updateCharacterController);
router.delete('/delete/:id',chars.deleteCharacterController);
router.get('/search/:name',chars.characterNameController);

module.exports = router
