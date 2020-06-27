const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        distance: {
            type: Number,
            required: false
        },
        weight: {
            type: Number,
            required: false
        },
        reps: {
            type: Number,
            required: false
        },
        sets: {
            type: Number,
            required: false
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
