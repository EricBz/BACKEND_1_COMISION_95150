import dotenv from "dotenv";

dotenv.config();

const env = {
    PORT: process.env.PORT || 8080,
    MONGO_URI: process.env.MONGO_URI
}

export default env;