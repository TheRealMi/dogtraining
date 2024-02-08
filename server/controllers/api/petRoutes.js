const router = require('express').Router();
const { Pet, Behavior, User, Training } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to get all pets for the current user
router.get('/', withAuth, async (req, res) => {
    try {
      const allPets = await Pet.findAll({
        include: [{ model: Behavior, include: [{ model: Training }] }],
        where: {
            user_id: req.session.user_id
        }
      });
  
      res.status(200).json(allPets);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Route to create a new pet for the current user
router.post('/', withAuth, async (req, res) => {
    try {
      const newPet = await Pet.create({
        ...req.body,
        user_id: req.session.user_id
      });
  
      res.status(200).json(newTraining);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;