import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './views/Nav.tsx';
import Banner from './views/Banner.tsx';
import Heroes from './views/Heroes.tsx';
import Footer from './views/Footer.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <Banner />
    <Heroes />
    <Footer />
  </StrictMode>,
)
