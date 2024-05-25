import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './feature/Login/LoginPage'
import AdminPage from './feature/Admin/AdminPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
