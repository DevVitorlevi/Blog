import { BrowserRouter, Routes, Router } from 'react-router-dom'
import GlobalStyles from './Styles/Global'

function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>

          <Router path='/' elements={<Home />} />
          <Router path='/about' elements={<About />} />
          <Router path='*' elements={<NotFound />} />

        </Routes>
      </BrowserRouter>
      <h1>Blog</h1>
    </>
  )
}

export default App
