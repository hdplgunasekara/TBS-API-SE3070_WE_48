import express from  "express";
import mongoose  from"mongoose";
import bodyParser  from "body-parser";
import cors  from "cors";
import dotenv  from "dotenv";
dotenv.config();
import routes from "./src/api/routes/index.js";

export const app = express();

const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(express.json({limit: "30mb",extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,

}); 

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("🔗 MongoDB Connected");
});

//add routes here

// const articleRoutes = require("./src/api/routes/article.routes");


// app.use("/article",articleRoutes);


app.listen(PORT,()=>{
    routes(app);
    console.log(`🚀 API Server up and running on PORT ${PORT}`);

})


