document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector('#create-task-form');
  // Get the task list element
  const taskList = document.querySelector('#tasks');
  
  // Add event listener to the form
  form.addEventListener('submit', (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Get the task description from the form input
    const taskInput = event.target.querySelector('#new-task-description');
    const taskDescription = taskInput.value;
    
    // Validate that the input is not empty
    if (taskDescription.trim() === '') {
      console.error('Task description cannot be empty');
      return;
    }
    
    // Create task object
    const task = {
      id: Date.now(), // Simple unique ID using timestamp
      description: taskDescription.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    // Build and add the task to the list
    buildToDo(task);
    
    // Clear the form input
    taskInput.value = '';
    
    // Log success message for debugging
    console.log(`Task added: ${task.description}`);
  });
  
  // Function to build and append a new task element
  function buildToDo(task) {
    // Create new list item
    const listItem = document.createElement('li');
    
    // Set the text content to the task description
    listItem.textContent = task.description;
    
    // Add data attributes for future enhancements
    listItem.setAttribute('data-task-id', task.id);
    listItem.setAttribute('data-created-at', task.createdAt);
    
    // Add a class for styling and identification
    listItem.classList.add('task-item');
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    
    // Add event listener to delete button
    deleteButton.addEventListener('click', () => {
      listItem.remove();
      console.log(`Task deleted: ${task.description}`);
    });
    
    // Create complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    
    // Add event listener to complete button
    completeButton.addEventListener('click', () => {
      listItem.classList.toggle('completed');
      const isCompleted = listItem.classList.contains('completed');
      task.completed = isCompleted;
      
      if (isCompleted) {
        completeButton.textContent = 'Undo';
        console.log(`Task completed: ${task.description}`);
      } else {
        completeButton.textContent = 'Complete';
        console.log(`Task uncompleted: ${task.description}`);
      }
    });
    
    // Append buttons to the list item
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    
    // Append the list item to the task list
    taskList.appendChild(listItem);
    
    // Log task creation for debugging
    console.log('Task element created and appended to list');
  }
  
 
  
  // Log initialization for debugging
  console.log('Task Lister Lite™️ initialized successfully');
});

