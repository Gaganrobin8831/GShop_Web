import mongoose from 'mongoose'

const connectDb= async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`MONGO DB!! ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDb