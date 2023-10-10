const asyncHandler = require('express-async-handler')

// @desc Get all goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({message: 'Get all goals'})
}

// @desc Set all goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please enter goal text')
  }
  res.status(200).json({message: 'Set goal'})
})

// @desc Update all goals
// @route PUT /api/goals
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({message: 'Update goal'})
}

// @desc Delete all goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({message: 'Delete goal'})
}

module.exports = { 
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}