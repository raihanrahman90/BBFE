import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './page/login'
import Test from './page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
