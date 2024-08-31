import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import LoginPage from './feature/Login/LoginPage'
import AdminPage from './feature/Admin/AdminPage'
import { trackPageView } from './components/Analytics';
import { useEffect } from 'react';

function App() {
  
  
  return (
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
  )
}

const Routing=()=>{
  const location = useLocation();
  useEffect(()=> {
    trackPageView(location.pathname);
  }, [location])

  return (
  <Routes>
    <Route path="/admin/*" element={<AdminPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
  </Routes>
  )
}

export default App
