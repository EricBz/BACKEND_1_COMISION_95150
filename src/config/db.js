import { connect } from "mongoose";

async function connectDB() {
    return await connect("mongodb://localhost:27017/95150");
}

export default connectDB;