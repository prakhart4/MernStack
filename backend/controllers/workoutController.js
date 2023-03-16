const mongoose = require('mongoose')
const Workout = require('../models/workoutModel')

// fetch all workouts
const getAllWorkouts = async (req, res)=>{
    try {
        res.status(200).json(await Workout.find())
    } catch (error) {
        res.status(400).json(error)
    }
}

// Fetch a workouts
const getWorkout = async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.id))
    return res.status(400).json({message:"not a valid objectId"})

    try {
        let workout = await Workout.findById(req.params.id)
        workout ? res.status(200).json(workout) : res.status(404).json({error:"workout not found"})
    } catch (error) {
        res.status(400).json(error)
    }
}

// Create a workouts
const createWorkout = async (req, res)=>{
    const {title, reps, load} = req.body;
    try {
        res.status(200).json(await Workout.create({
            ...(title?{title}:{}),
            ...(reps?{reps}:{}),
            ...(load?{load}:{})
        }))
    } catch (error) {
        res.status(400).json(error)
    }
}

// update a workouts
const updateWorkout = async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.id))
    return res.status(400).json({message:"not a valid objectId"})

    try {
        let updatedWorkout = await Workout.findOneAndUpdate({_id:req.params.id},{
            ...req.body
        })
        updatedWorkout?res.status(200).json(updatedWorkout):  res.status(404).json({error:"workout not found"})
    } catch (error) {
        res.status(400).json(error)
    }
}

// Delete a workouts
const deleteWorkout = async (req, res)=>{
    if(!mongoose.isValidObjectId(req.params.id))
    return res.status(400).json({message:"not a valid objectId"})

    try {
        let deletedWorkout = await Workout.findOneAndDelete({_id:req.params.id})
        deletedWorkout?res.status(200).json(deletedWorkout) : res.status(404).json({error:"workout not found"})
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllWorkouts,
    createWorkout,
    getWorkout,
    updateWorkout,
    deleteWorkout
}