import express from "express"
import cors from "cors"
import { createNewCloud, deleteAll, getAllCloud } from "./controller/cloudController.js"
import { upload } from "./middleware/multerMiddleware.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


app.get("/cloud",getAllCloud)
app.post("/cloud",upload.array("gambar"),createNewCloud)
app.delete("/cloud",deleteAll)




app.listen(port, () => {
    console.log(`Server running on http://localhost:3000/`)
})