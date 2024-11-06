import mongoose from 'mongoose'

const connectDB = async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("database Connected");
        
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/brush-ai`)
}

export default connectDB