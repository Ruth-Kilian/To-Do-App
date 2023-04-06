// a ReactJS/Redux to-do application

import './App.css'
import Form from './components/Form/ToDoForm'
import List from './components/List/ToDoList'

function App() {
  return (
    <div className="App">
      <h1>To-Do Application</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;