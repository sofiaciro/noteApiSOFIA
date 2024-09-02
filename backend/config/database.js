const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env, USERBD}:${process.env, PASSBD}@sofiaadso2669736.pfg45sq.mongodb.net/${process.env, BD}?retryWrites=true&w=majority`
mongoose.connect(URI);

module.exports = mongoose;