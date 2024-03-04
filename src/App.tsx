import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/home'
import Menu from './menu/menu'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Data from './data/cardData';

function App() {


  return (
    <>
      <Menu/>
      <Routes>
          <Route path='/' element={<Home />}/>
      </Routes>

      {console.log(Data)}
    </>
  )
}

export default App
