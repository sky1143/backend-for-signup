import express from "express";
import pg from "pg"
import env from "dotenv"
import bodyParser from "body-parser";


const app = express();
const port = 3000;
env.config();


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));


const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password :(process.env.PG_PASSWORD),
    port : (process.env.PG_PORT),
});

db.connect((err)=>{
    if(err){
        console.log("connection Error",err.stack)
    }else{
        console.log("Database is connected");
        
    }
});

app.get("/",(req,res) => {
    res.render("home.ejs")
})

app.get("/login",(req,res)=>{
    res.render("login.ejs")
})

app.get("/register",(req,res)=>{
    res.render("register.ejs")
})

app.post("/login",async(req,res)=>{
const result = await db.query(" ")
})

app.post("/register",async(req,res)=>{
    const email = req.body.email
    const password =  req.body.password

    try {
        const checkResult = await db.query(
            "SELECT * FROM newuser WHERE email =$1",[
                email,
            ]);
            if(checkResult.rows.length > 0){
                
            }

    } catch (error) {
        
    }
    const result = await db.query(
    "INSERT INTO newuser ($1,$2) VALUES "[
        email,password])
})
app.post("/register",(req,res)=>{

})



app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
    
})