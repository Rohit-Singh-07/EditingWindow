
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import TopNav from './Components/TopNav';

function App() {

  return (
    <>
    <TopNav/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
