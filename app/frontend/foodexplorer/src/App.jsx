import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
