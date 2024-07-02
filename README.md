
# Simple React To-Do Application

This is a simple to-do list application built using React and Redux. It allows you to add, view, delete, and mark tasks as complete.

## Features

- Add tasks using an input field.
- View tasks in a list format.
- Delete tasks from the list.
- Mark tasks as complete or undo completion.

## Requirements

- Node.js installed on your machine.
- Basic understanding of React and Redux.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   cd react-redux-todo-app
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   The app should now be running on `http://localhost:3000`.

4. **Usage:**

   - **Adding a Task:**
     - Enter a task in the input field and click on "Add Task".
   - **Deleting a Task:**
     - Click on the "Delete" button next to the task you want to remove.
   - **Completing/Undoing a Task:**
     - Click on the "Complete" button to mark a task as completed. Click again to undo.

## Project Structure

- **Components:**
  - **TaskInput:** Component for adding new tasks.
  - **TaskList:** Component for displaying the list of tasks and handling task operations.
- **Redux:**
  - **Actions (`actions.js`):** Defines actions like adding a task, deleting a task, and toggling task completion.
  - **Reducers (`reducers.js`):** Handles state updates based on actions.
  - **Store (`store.js`):** Configures the Redux store.
- **CSS:** Basic styling for components.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, please feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Feel free to customize this README further based on additional features or specific configurations of your application.