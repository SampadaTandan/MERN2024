const mongoose = require('mongoose');
const URI="mongodb://127.0.0.1:27017/"
// 
const connectDb = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log('Connection succcessful to DB')
    }catch(error){
        console.log('Error connecting to DB')
        process.exit(0);
    }
};

module.exports = connectDb;