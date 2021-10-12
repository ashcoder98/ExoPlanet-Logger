const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema ({
    name: { type: String},
    environment: {type: String},
    lifeforms: { type: String},
    water: { type: Boolean, default: false},
    habitable: { type: Boolean, default: false}
})

const Planet = mongoose.model('Planet', planetSchema)
module.exports = Planet