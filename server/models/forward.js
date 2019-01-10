const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forwardSchema = new Schema({
    project_id: { type: String, required: true},
    user_id: { type: String, required: true},
    tag: { type: String, required: false },
    data: {type: Object},
    created_at: Date
});

const Forward = mongoose.model('Forward', forwardSchema);

module.exports = Forward;