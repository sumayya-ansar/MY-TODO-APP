import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title"> To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
