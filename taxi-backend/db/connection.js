//import mongoose
const mongoose = require('mongoose')

const db =process.env.DATABASE


mongoose.connect(db, {
    // useUnifiedTOpology: true,
    // useNewUrlParser: true
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
})