import app from "./app.js"
import env from "./config/env.js";
import connectDB from "./config/db.js";



app.listen(env.PORT, () => {
    console.log("server andando en el puerto " + env.PORT);
    connectDB()
        .then(() => console.log("conectado a DB"))
        .catch(e => console.log(e))
});