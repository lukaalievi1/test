import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import TodoList from "./pages/TodoList"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="Shop" element={ <Shop /> } />
        <Route path="Todolist" element={ <TodoList /> } />
      </Routes>
    </div>
  )
}

export default App
