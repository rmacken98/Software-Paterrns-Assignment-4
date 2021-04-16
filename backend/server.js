
import express from 'express';
import cors from 'cors';
import data from  './data.js'

const app = express();

app.use(cors());
app.get("/api/products", (req, res)=> {
    res.send(data.products);
});


app.listen(8999, ()=>{
console.log("server at http://localhost:8999")}
);