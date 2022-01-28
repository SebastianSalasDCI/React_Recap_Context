import React, { useContext, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import ToDo from '../../components/ToDo';
import TodoContext from '../../context/TodoContext'

export default function Category() {
  const params = useParams()
  const navigate = useNavigate();
  const {getFromCategory} = useContext(TodoContext);
  const categoryTodoList =  getFromCategory(params.category);
  useEffect(() => {
    if(!["notFrequent","daily","urgent"].includes(params.category)){
      navigate("/notfound")
    }
  }, [])
  return (
    <div className='categoryContainer' >
      <button className='backButton' onClick={()=>navigate("/")} >Back</button>
      <h1>{params.category}</h1>
      {categoryTodoList.length > 0 ? 
          categoryTodoList.map(item=><ToDo key={item.id} item={item} />)
        :
          <h2>Hey! there are no To Do's in the category {params.category} </h2>
      }
    </div>
  )
}
