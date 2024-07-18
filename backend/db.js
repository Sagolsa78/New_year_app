const mongoose= require("mongoose");


mongoose.connect("mongodb+srv://sahanimohit5ed:xdXDthveqiLf1RbP@cluster0.s3od1pp.mongodb.net/TodoApp");

const todoSchema= mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,  

})

const todo =mongoose.model("todo",todoSchema );

module.exports={
    todo
}