const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({
   power: {
       type: String,
       required: true,
   },
   createdAt: {
       type: Date,
       default: Date.now,
   },
});

mongoose.model('Info', InfoSchema);