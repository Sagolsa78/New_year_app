// importReact from 'react';
// import PropTypes from 'prop-types';





// function Todo({todos}) {
//     return (
//         <div>

//             {todos.map(function(todo, index) {
//                 return (
//                     <div key={index}>
//                         <h1>{todo.title}</h1>
//                         <h2>{todo.description}</h2>
//                         <button>{todo.completed ? "Completed" : "Mark as completed"}</button>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }


// Todos.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         completed: PropTypes.bool.isRequired
//     })).isRequired
// };


// export default Todo;



import React from 'react';
import PropTypes from 'prop-types';

function Todos({ todos }) {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed ? "Completed" : "Mark as completed"}</button>
                </div>
            ))}
        </div>
    );
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

export default Todos;
