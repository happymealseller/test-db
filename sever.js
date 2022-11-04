const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')


dotenv.config({path : './config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(res => console.log("DB Connected!"))

const PORT = process.env.PORT
app.listen(PORT, ()=>{console.log(`Server Listening at Port ${PORT}...`)})