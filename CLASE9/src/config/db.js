import { connect } from "mongoose";
import env from "./env.js"

async function connectDB() {
    return await connect(env.MONGO_URI);
}

export default connectDB;