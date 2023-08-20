import React,{useState} from "react";
import Todo from "./Todo";

const Form = () =>{
    const [todo, setTodos] = useState([
        {todo: 'todo 1' },
        {todo: 'todo 2' },
        {todo: 'todo 1' }
    ])
return (
    <>
    {
        todo.map((value,index) => (<Todo todo={value.todo} />))
    }
    </>
    )
}
export default Form;