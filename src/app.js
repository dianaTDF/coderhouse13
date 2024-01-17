import express from "express"

import { PORT } from "./config/config.js"
import { connectDb } from "./database/mongodb.js"
import { router as apiRouter } from "./router/apirouter/api.router.js"

await connectDb()

export const app= express()

app.listen(PORT, ()=>{
    console.log(`conected to port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use("/static",express.static("./static"))

app.use("/api",apiRouter)


