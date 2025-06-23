import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import PublicRoutes from './routes/PublicRoutes.jsx';

function App() {
  return (
    <Routes>

      <Route path="/" element={<PrivateRoutes />} >
        <Route path="/me" element={<ProfilePage />} />
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/" element={<PublicRoutes />} >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
