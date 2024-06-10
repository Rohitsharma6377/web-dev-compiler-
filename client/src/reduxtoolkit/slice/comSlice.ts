import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface comSliceStateType {
  fullCode:{
    html: string;
    css: string;
    javascript: string;

  };
  currentLanguage: "html" | "css" | "javascript";
 
}
const initialState: comSliceStateType = {
  fullCode:{

    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>To-Do List by Pixels&co.</title>
    </head>
    <body>
        <div id="todo-container">
            <input type="text" id="todo-input" placeholder="Add a new task">
            <ul id="todo-list"></ul>
        </div>
    <script src="script.js"></script>
    </body>
    </html>
    `,
    css: `body {
      font-family: Arial, sans-serif;
  }
  #todo-container {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
  }
  #todo-input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      box-sizing: border-box;
  }
  #todo-list {
      list-style-type: none;
      padding: 0;
  }
  .todo-item {
      padding: 10px;
      margin-bottom: 5px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 3px;
  }
  .todo-item:hover {
      background-color: #f0f0f0;
  }
  .delete-btn {
      float: right;
      cursor: pointer;
  }`,
    javascript: `     // Get references to HTML elements
    const inputBox = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Add event listener for Enter key
    inputBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodoItem();
        }
    });

    // Function to add a new To-Do item
    function addTodoItem() {
        const todoText = inputBox.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');
            todoItem.textContent = todoText;
            const deleteButton = document.createElement('span');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = '❌';
            deleteButton.addEventListener('click', function() {
                todoItem.remove();
            });
            todoItem.appendChild(deleteButton);
            todoList.appendChild(todoItem);
            inputBox.value = '';
          }
        }`,
  },
  currentLanguage: "html",
};
const comSlice = createSlice({
  name: "comSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<comSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodevalue:(state , action:PayloadAction<string>)=>{
  state.fullCode[state.currentLanguage]=action.payload;
    },
  
  },
});
export default comSlice.reducer;
export const { updateCurrentLanguage, updateCodevalue} = comSlice.actions;
