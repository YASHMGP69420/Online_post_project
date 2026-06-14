const express = require("express")
const app = express();
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const postModel = require("./models/post.models")
const cors = require("cors")

const upload = multer({storage:multer.memoryStorage()})

app.use(cors())
app.use(express.json())

app.post("/create-post", upload.single("image"), async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    
    const result = await uploadFile(req.file.buffer)
    // console.log(result);

    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption
    })

    res.status(201).json({
        message:"post created successfully",
        post
    })
})

app.get("/", async (req,res)=>{
    const posts = await postModel.find()

    res.status(200).json({
        message:"posts fethed",
        posts
    })
})


module.exports = app;