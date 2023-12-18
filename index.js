const express = require("express");
const path = require ("path")
const mainRouter = require ("./src/routes/mainRouter")
const authRouter = require ("./src/routes/authRouter")
const adminRouter = require ("./src/routes/adminRouter")
const shopRouter = require ("./src/routes/shopRouter")


const app = express()

const port = 3000


app.set("views",path.join (__dirname, "/src/views"))
app.set ("view engine", "ejs")

app.use ("/",mainRouter)
app.use ("/auth",authRouter)
app.use ("/shop",shopRouter)
app.use ("/admin",adminRouter)

app.use(express.static(__dirname + '/public'));

app.listen (port, ()=> {
    console.log( `Estas en el puerto:${port}`);
})