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
  const [usuario, setUsuario] = useState(undefined); // Inicializa como indefinido para controlar carregamento
  const { auth } = useAuth(); // Obtém a instância de autenticação do contexto

  useEffect(() => {
    // Observa mudanças na autenticação
    const cancelarObservador = onAuthStateChanged(auth, (usuario) => {
      setUsuario(usuario); // Define o usuário autenticado ou null se não autenticado
    });

    return () => cancelarObservador(); // Remove o observador ao desmontar o componente
  }, [auth]); // Reexecuta o efeito somente se 'auth' mudar

  const carregando = usuario === undefined; // Define se está carregando a autenticação
  if (carregando) {
    return <p className="loading">Carregando...</p>; // Mostra mensagem de carregamento antes de exibir a aplicação
  }

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
          <Route path="/profile" element={!usuario ? <Login /> : <Navigate to='/profile' />} />
          <Route path="/dashboard" element={!usuario ? <Login /> : <Navigate to='/dashboard' />} />
          <Route path="/createpost" element={!usuario ? <Login /> : <Navigate to='/dashboard' />} />
          <Route path="*" element={<NotFound />} /> {/* Página 404 */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
