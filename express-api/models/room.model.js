const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*     var commentSchema = new Schema({
        comment:String,
        user:{
            type:Schema.Types.ObjectId,
            ref:'user'
        }
    }) */

var newsSchema = new Schema({
    // price: Number,
    image: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    categories: {
        type: String,
        enum: ['business', 'politics', 'lifestyle', 'travel']
    },
    // numberOfRoom: Number,
    // carParking: {
    //     type: Boolean,
    //     default: false
    // },
    // bikeParking: {
    //     type: Boolean,
    //     default: false
    // },
    title: String,
    description: String,
    // map: {
    //     isMap: {
    //         type: Boolean,
    //         default: false
    //     },
    //     lat: Number,
    //     lng: Number
    // },
    // comment: [{
    //     comment: String,
    //     user: {
    //         type: Schema.Types.ObjectId,
    //         ref: 'user'
    //     }
    // }]
}, {
    timestamps: true
})

var roomModel = mongoose.model('new', newsSchema);

module.exports = roomModel;