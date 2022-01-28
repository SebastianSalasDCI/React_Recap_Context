import React from 'react'
import Landing from '../views/Landing/Landing';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Category from '../views/Category/Category';
import ToDoView from '../views/ToDoView/ToDoView';
import NotFound from '../views/NotFound/NotFound';
import TodoProvider from '../context/TodoProvider';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <main className='mainContainer'>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/category/:category" element={<Category/>}/>
            <Route path="/category/:category/:todoid" element={<ToDoView/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </TodoProvider>
    </BrowserRouter>
  )
}
