import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import TodoContext from '../context/TodoContext'

export default function ToDo({item}) {
  const {deleteTodo} = useContext(TodoContext)
  return (
    <div className='todo'>
      <h3> <Link className='todoTitle' to={`/category/${item.category}/${item.id}`} >{item.todo}</Link></h3>
      <h4>{item.date} <Link className='todoCategory' to={`/category/${item.category}`} >{item.category}</Link> </h4>
      <p>{item.desc.substr(0,5)}...</p>
      <button onClick={()=>deleteTodo(item.id)} >Delete</button>
    </div>
  )
}
