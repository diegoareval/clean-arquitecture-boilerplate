import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`

export const dbInit = async () => {
    await connect(DB_URI)
    console.log('Connected to mongo db')
}
