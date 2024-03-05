import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/home'
import Menu from './menu/menu'
import Form from './Form/form'
import Table from './Table/table'
import "primereact/resources/themes/lara-light-cyan/theme.css";


function App() {


  return (
    <>
      <Menu/>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/table' element= {<Table/>}/>
      </Routes>
    </>
  )
}

export default App
