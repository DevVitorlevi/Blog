import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './Styles/Global'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
//components
import Header from './Components/Header'

function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' elements={<Home />} />
          <Route path='/about' elements={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' elements={<NotFound />} />

        </Routes>
      </BrowserRouter>
      <h1>Blog</h1>
    </>
  )
}

export default App
