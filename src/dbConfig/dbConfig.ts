import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDb Connected Successfully')
        })

        connection.on('error', (err) => {
            console.log('MongoDb Connection Error', err)
            process.exit()
        })
    } catch(err) {
        console.log('Something Went Wrong!')
        console.log(err)
    }
}