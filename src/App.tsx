import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AdminLogin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
