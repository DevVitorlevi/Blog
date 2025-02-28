import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./Styles/Global";
// Páginas
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/Home/NotFound";
import CreatePost from "./pages/Post/CreatePost";
import Profile from "./pages/Profile/Profile";
import Dash from "./pages/Dashboard/Dash";

// Componentes
import Header from "./Components/Header";
import { AuthProvider } from "./Context/AuthContext";
import { useAuth } from "./Hooks/useAuth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const { auth } = useAuth();
  const [usuario, setUsuario] = useState(null); // Inicialize com null, já que undefined é usado para carregamento

  useEffect(() => {
    const cancelarObservador = onAuthStateChanged(auth, (usuario) => {
      setUsuario(usuario); // Define o usuário autenticado ou null se não autenticado
    });

    return () => cancelarObservador(); // Remove o observador ao desmontar o componente
  }, [auth]);

  return (
    <AuthProvider value={usuario}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={!usuario ? <Register /> : <Navigate to='/' />} />
          <Route path="/login" element={!usuario ? <Login /> : <Navigate to='/' />} />
          <Route path="/profile" element={!usuario ? <Profile /> : <Navigate to='/login' />} />
          <Route path="/dashboard" element={!usuario ? <Dash /> : <Navigate to='/login' />} />
          <Route path="/createpost" element={!usuario ? <CreatePost /> : <Navigate to='/login' />} />
          <Route path="*" element={<NotFound />} /> {/* Página 404 */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
