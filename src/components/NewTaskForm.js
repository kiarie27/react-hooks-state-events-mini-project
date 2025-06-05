import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  });

  function displayCategoryOptions() {
    return categories.map(category => {
      if (category !== "All") {
        return (
          <option key={category} name="category">{category}</option>
        )
      }
    })
  }

  function handleInput(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData)
    onTaskFormSubmit(formData);
    setFormData({
      text: "",
      category: ""
    })
  }

  console.log(formData.text)
  console.log(formData.category)

  return (
    <form className="new-task-form"
      onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleInput} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleInput}>
          {/* render <option> elements for each category here */}
          {displayCategoryOptions()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;