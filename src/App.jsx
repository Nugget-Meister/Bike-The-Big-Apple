import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/NavBar/Navbar'
import Map from './components/pages/Map/Map'
import Profile from './components/pages/Profile/Profile'
import SavedRoutes from './components/pages/SavedRoutes/SavedRoutes'
import Splash from './components/pages/Splash/Splash'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Splash/>}/>
          <Route path={'/map'} element={<Map/>}/>
          <Route path={'/profile/:username'} element={<Profile/>}/>
          <Route path={'/saved'} element={<SavedRoutes/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
