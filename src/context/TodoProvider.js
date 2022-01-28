import React, { createContext, useState } from 'react'
import TodoContext from './TodoContext'

export default function TodoProvider({children}) {
  const [todoList,setTodoList] = useState([])

  const onSubmitTodo = (e,todo,date,category,desc) => {
    e.preventDefault()
    setTodoList((prevState)=>{
      let id = prevState.length > 0 ? prevState[prevState.length-1].id + 1 : 1 ;
      return [...prevState,{id,todo,date,category,desc}]
    })
  }

  const deleteTodo = (id) => {
    setTodoList((prevState)=>{
      return prevState.filter(element=>element.id!==id)
    })
  }

  const getFromCategory = (categroy) => {
    return todoList.filter(element=>element.category === categroy);
  }

  const getTodo = (id) => {
    return todoList.find(element=> element.id === parseInt(id))
  }

  const providedData = {
    todoList,
    onSubmitTodo,
    deleteTodo,
    getFromCategory,
    getTodo
  }

  return (
    <TodoContext.Provider value={providedData}>
      {children}
    </TodoContext.Provider>
  )
}
