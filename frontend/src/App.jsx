import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Resume from './pages/Resume';
import { ThemeProvider } from './context/ThemeContext';

function ScrollToTop() {
  const location = useLocation();
  const { pathname, hash, state } = location;

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const targetId = (hash ? hash.replace('#', '') : state?.scrollTo) || null;

    if (targetId) {
      let didScroll = false;
      let attempts = 0;
      const maxAttempts = 20;

      const performScroll = () => {
        if (didScroll) return;
        const element = document.getElementById(targetId);
        if (element) {
          didScroll = true;
          requestAnimationFrame(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(performScroll, 50);
        }
      };

      const timer = setTimeout(performScroll, 60);

      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash, state]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 flex flex-col justify-between transition-colors duration-200">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
