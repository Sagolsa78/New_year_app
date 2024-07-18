///write basic express boilerplate
//with express.json()middleware

const express= require ("express");
const app=express();

const {createTodo,updateTodo}= require("./types.ts");
const {todo}=require("./db.js");






app.use (express.json());

// console.log(createTodo)
// console.log(updateTodo)

app.post("/todo",async function(req,res){
    
    const createPayload= req.headers;
    const parsedPayload= createTodo.safeParse(createPayload);

    // console.log(parsedPayload);
    console.log(createPayload);
    // console.log(createTodo.safeParse);

    

    if (!parsedPayload.success){
        res.status(411).json({
            msg:"you sent a wrong input ",  
        })  

        return;
    }else{
    



        await todo.create({
            title :createPayload.title,
            description:createPayload.description,
            completed:false
        })
        res.json({
            msg:"Todo created"

        })
    }
   
    })


app.get("/todo",async function(req,res){
    const todos=await todo.find({

    })
    
    res.json({
        todos
    })

})

app.post("/completed",async function(req,res){
    const updatePayload =req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent an invalid inputs"
        })
    
    return;

  }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"todo marked as done" 
    })





}) 


app.listen(3000);
console.log('port is running ')


