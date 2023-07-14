// const mongooes = require("mongoose");


// const connectDatabase = () => {
//     mongooes.connect(process.env.DB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then((data) => {
//         console.log(`Mongodb connected with server: ${data.connect.host}`);
//     })
// }

// module.exports = connectDatabase

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("connect successful")
    } catch (error) {
        console.log(error)
    }
};

module.exports = connectDatabase;