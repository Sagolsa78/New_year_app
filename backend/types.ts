

const zod =require("zod");
const bodyparser=require("body-parser");

const createTodo=zod.object({
    title: zod.string(),
    description:zod.string(),


})




const updateTodo=zod.object({
    id:zod.string() ,


})

// console.log(updateTodo)

module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}
// console.log(createTodo,);

// const zod = require("zod");
// const bodyParser = require("body-parser");

// const createTodo = zod.object({
//     title: zod.string(),
//     description: zod.string(),
// });

// const updateTodo = zod.object({
//     id: zod.string(),
// });

// module.exports = {
//     createTodo,
//     updateTodo
// };
