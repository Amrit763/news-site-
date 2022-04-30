const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var newsSchema = new Schema({
    image: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    categories: {
        type: String,
        enum: ['business', 'politics', 'lifeStyle', 'travel', 'entertainment', 'international']
    },
    tags: String,
    title: String,
    description: String,

}, {
    timestamps: true
})

var roomModel = mongoose.model('new', newsSchema);

module.exports = roomModel;