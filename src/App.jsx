import React from 'react'
import Home from './Home'
import Header from './componets/Header'
import { Routes,Route } from 'react-router-dom'
import Todo from './Todo'

const App = () => {
  return (
    <div>
       <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </div>
  )
}

export default App