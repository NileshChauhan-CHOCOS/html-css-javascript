import React, { useState } from "react";
const Todo = ()=>{
    var createInitialTodos = ()=> {
        const initialTodos = [];
        for (let i = 0; i < 10; i++){
            initialTodos.push({
                id : 1,
                text : "Item" + (i + 1)
            });
        }
        return initialTodos;
    }
    const [todos , setTodos] = useState(createInitialTodos);
    return(
        <>
        <ul>
            {
                todos.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))
            }
        </ul>
        </>
    )
}
export default Todo;