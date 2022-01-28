import React from 'react'

export default function Form(prop) {
  return (
    <form className="form-container" onSubmit={prop.onSubmit}>
      <label htmlFor="todo">To Do:</label>
      <input type="text" id="todo" placeholder='Cook lunch' 
              value={prop.todo} onChange={prop.onChangeTodo}
      />

      <label htmlFor="date">Date</label>
      <input type="date" id="date" 
              value={prop.date} onChange={prop.onChangeDate}
      />

      <label htmlFor="category">Category</label>
      <select id="category"
        value={prop.category} onChange={prop.onChangeCategory}
      >
        <option value="daily"> Daily </option>
        <option value="urgent"> Urgent </option>
        <option value="notFrequent">Not frequent</option>
      </select>

      <label htmlFor="description">Description (optional)</label>
      <textarea id="description" cols="30" rows="10" placeholder="Write some description of the To Do"  
                value={prop.desc} onChange={prop.onChangeDesc}
      />

      <button type="submit">Add To Do</button>
    </form>
  )
}
