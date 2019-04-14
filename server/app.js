//Addressing Dependencies
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const Data = require('./data');
const mongoose = require('mongoose');
const logger = require('morgan');
//

//Setting up Express
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
//

//Addressing Database
const mongoDB = "mongodb+srv://atlasAdmin:atlasAdmin@cluster0-qr5y4.mongodb.net/test?retryWrites=true";
//

//Establishing a DB Connection
mongoose.connect(mongoDB,
  { useNewUrlParser: true }
);
let db = mongoose.connection;
//
//Log the Connection
db.once("open", ()=>{
	console.log("Connection Established")
})
//

//Fetch data from DB
router.get("/getData", (req, res) => {
    Data.find( {} , function(err, data) {
        if (err) console.log('Fetching Unsuccessful');
        return res.json({ data });
    });
});
//

//Initialize Data
router.post("/putData", (req, res) => {
    let source = req.body;
    console.log(Data.findOne({id:source.productId}, function (err, data){
        if (data==null) put();
    }));

    function put() {
        let data = new Data();
        data.id = source.productId;
        data.Product = source.productName;
        data.Color = source.productColor;
        data.Price = source.productPrice;
        Data.collection.insertOne(data, function (err) {
            if (err) console.log(err);
        })
    }
});
//

router.delete("/deleteData", (req, res) => {
    const id = req.body.productId;
    Data.findOneAndRemove({id: id}, req.body, function(err,data) {
        if(!err)
            console.log('Item with ID '+id+" deleted successfully" )
    })
});

router.post("/updateData", (req, res) => {
    const name = req.body.oldProductName;
    const color = req.body.oldProductColor;
    const newName = req.body.productName;
    const newColor = req.body.productColor;
    const newPrice = req.body.productPrice;
    Data.update({Product: name, Color: color}, {"$set": {Product:newName,Color:newColor}},{multi:true},err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});


// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(logger("dev"));
//
// Append API for HTTP requests
app.use("/api", router);
//
// Start Server
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
//