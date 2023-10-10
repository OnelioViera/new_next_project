const express = require('express') // Import express
const router = express.Router() // This is a mini express app that only handles routes
const { 
  getGoals, 
  setGoal, 
  updateGoal, 
  deleteGoal 
} = require('../controllers/goalControllers') // Path: backend/routes/goalRoutes.js

router.route('/').get(getGoals).post(setGoal) // Path: backend/routes/goalRoutes.js

router.route('/:id').delete(deleteGoal).put(updateGoal) // Path: backend/routes/goalRoutes.js

module.exports = router