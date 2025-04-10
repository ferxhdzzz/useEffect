import { BrowserRouter as Router, Routes, Route} from 'react-router'

import Nav from './components/Nav'
import DragonBall from './pages/DragonBall'
import './App.css'
import RickAndMorty from './pages/Morty'

function App() {


  return (
    <>
     <Router>
        <Nav/>
        <Routes>
          <Route path="/DragonBall" element={<DragonBall/>} />
          <Route path='/Morty' element={<RickAndMorty/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
