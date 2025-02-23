import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './Styles/Global'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
//components
import Header from './Components/Header'
import { AuthProvider } from './Context/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' elements={<Home />} />
            <Route path='/about' elements={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' elements={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
