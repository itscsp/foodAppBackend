import express from "express"
import cors from "cors"

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// App config
const app = express();
const port  = 4000

//middleware
app.use(express.json());
app.use(cors())

//db connection
connectDB();

//API endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads')); // To get image by url

app.get("/", (req, res)=>{
    res.send("API Working");
})

app.listen(port,() => {
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://chethanspoojary1:XtdQ9mBMbEi6DnF2@cluster0.kjuhayg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0