const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        circuit: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        locality: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        drivers: {
            type: [String],
            required: true
        },
        location: {
            type: {
                type: String,
            },
            coords: {
                type: [Numbers]
            }
        },
        finalClasification: {
            type: [String],
            required: true
        }
    },
    {
        timestamps: true
    }
);
eventSchema.index({ location: '2dsphere' })

const Event = model("Event", eventSchema);

module.exports = Event;