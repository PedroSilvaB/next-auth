import mongoose from 'mongoose'

let cacheDb: typeof mongoose;

const connect = async () => {
    try {
        if (!cacheDb) {
            cacheDb = await mongoose.connect(process.env.DATABASE_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            })
        }
        return cacheDb
    } catch (error) {
        throw error
    }

}
connect()
export default mongoose