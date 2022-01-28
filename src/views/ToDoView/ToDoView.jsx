import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import TodoContext from '../../context/TodoContext';

export default function ToDoView() {
  const params = useParams();
  const navigate = useNavigate();
  const {getTodo} = useContext(TodoContext);
  const todo = getTodo(params.todoid);
  useEffect(() => {
    if(!todo){
      navigate("/notfound")
    }
  }, [])
  return (
    <div className='todoViewContainer' >
      <button className='backButton' onClick={()=>navigate("/")} >Back to Home</button>
      <button className='backButton' onClick={()=>navigate(`/category/${todo.category}`)} >Back to Category</button>
      {todo ? 
        <>
          <h1>{todo.todo}</h1>
          <h2>Date: {todo.date} <Link className='todoCategory' to={`/category/${todo.category}`} >{todo.category}</Link></h2>
          <h3>Description:</h3>  
          <p> {todo.desc} </p>
        </>
      : 
        null
      }
    </div>
  )
}
