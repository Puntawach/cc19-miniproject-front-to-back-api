const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
//routing import
const authRouter = require("../server/routes/auth-routes");
const handleError = require("./middlewares/error");
const userRouter = require("../server/routes/user.routes")

const app = express();
//middleware
app.use(cors()) // allow cross domain 
app.use(morgan("dev")) // show log at termial
app.use(express.json()) // For read json


//routing 
app.use("/api", authRouter)
app.use("/api", userRouter)
// handle 
app.use(handleError)

//start server 
const PORT = 8000
app.listen(PORT,()=>console.log("this server is running on port "+PORT))