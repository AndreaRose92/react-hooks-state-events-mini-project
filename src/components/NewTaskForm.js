import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit}) {
  
 
  const [formData, setFormData] = useState()

  function handleChange(e) {
    const {name , value} = e.target

    setFormData(formData => {
      return { ...formData, [name]: value}
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(formData)
    
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          <option name="All" >All</option>
          <option name="Code" >Code</option>
          <option name="Food" >Food</option>
          <option name="Money" >Money</option>
          <option name="Misc" >Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
