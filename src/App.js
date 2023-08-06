import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import TodoHome from './pages/TodoHome';

function App() {
  return (
    <div className="App">
      {/* Route  */}
      <Routes>
        <Route path='/home' element={<TodoHome/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
