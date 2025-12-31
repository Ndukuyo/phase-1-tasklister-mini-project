document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // Select the form
  const form = document.getElementById('create-task-form');
  
  // Add event listener to form
  form.addEventListener('submit', (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Use the name new-task-description to select the correct input element
    // We need to get the input element directly, not from event.target
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value.trim();
    
    // Only add the task if there's actual content
    if (taskDescription === '') {
      console.log('Task description is empty. Not adding task.');
      return;
    }
    
    // Create a new function called buildToDo() and call it
    // Pass in the saved task
    buildToDo(taskDescription);
    
    // Reset the form after submission
    form.reset();
  });
  
  // Function to build and append a new todo item
  function buildToDo(task) {
    // Create a new li element
    const li = document.createElement('li');
    
    // Add the task as the textContent
    li.textContent = task;
    
    // Create a delete button for each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.style.fontSize = '12px';
    
    // Add event listener to delete button
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      li.remove();
    });
    
    // Append delete button to the li
    li.appendChild(deleteBtn);
    
    // Append the li element to the task list
    // Task list is under the id of tasks
    const taskList = document.getElementById('tasks');
    taskList.appendChild(li);
    
    // Optional: Add some console logging for debugging
    console.log(`Task added: ${task}`);
    console.log(`Total tasks: ${taskList.children.length}`);
  }
  
  // Optional: Add ability to mark tasks as complete
  document.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      // Toggle strike-through for completed tasks
      event.target.style.textDecoration = event.target.style.textDecoration === 'line-through' 
        ? 'none' 
        : 'line-through';
    }
  });
});