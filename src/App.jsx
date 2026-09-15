import { useEffect, useState } from 'react';
import PetalField from './components/PetalField.jsx';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Story from './pages/Story.jsx';
import LetterPage from './pages/LetterPage.jsx';

export default function App() {
  const [page, setPage] = useState('home');

  // scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  return (
    <>
      <PetalField />
      <Nav page={page} setPage={setPage} />
      <main>
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'about' && <About />}
        {page === 'story' && <Story />}
        {page === 'letter' && <LetterPage />}
      </main>
      <footer className="text-center px-5 pt-10 pb-[60px] text-xs text-brand-rose/70">
        made with love, for Chenda · July 21st
      </footer>
    </>
  );
}
