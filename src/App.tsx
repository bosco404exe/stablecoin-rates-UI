import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DeveloperPage from './pages/DeveloperPage';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className='bg-background  min-h-screen flex flex-col relative pb-32'>
    <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/developer" element={<DeveloperPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
