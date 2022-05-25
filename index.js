const express = require("express");
const app = express();

const cors = require('cors');


app.use(cors());
app.use(express.json({limit: 1000000}))

app.get("/", (req, res) =>{
    res.send("<h1>Hello !!</h1>")
})



app.listen(process.env.PORT || 3000);