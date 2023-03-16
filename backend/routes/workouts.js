const express = require('express')
const {
    getAllWorkouts,
    createWorkout,
    getWorkout,
    updateWorkout,
    deleteWorkout
} =require('../controllers/workoutController')

const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.patch('/:id', updateWorkout)

router.delete('/:id', deleteWorkout)


module.exports = router