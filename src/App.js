import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import MainPage from "./pages/MainPage"
import DetailsPage from './pages/DetailsPage'
import Wrapper from "./components/layout/Wrapper"

const App = () => {
  // converting string to boolean
  let value = (localStorage.getItem('dark') === 'true')
  // initial state from local storage boolean
  const [darkMode, setDarkMode] = useState(value)
  document.body.classList.add(`${darkMode}`)

  const changeDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('dark', `${!darkMode}`)
    document.body.classList = ''
    document.body.classList.add(`${!darkMode}`)
  }

  return (
    <Wrapper changeDarkMode={changeDarkMode} darkMode={darkMode} >
      <Routes>
        <Route exact path='/' element = { <MainPage /> } /> 
        <Route exact path='/:code' element = { <DetailsPage /> } /> 
      </Routes>
    </Wrapper>
  )
}

export default App