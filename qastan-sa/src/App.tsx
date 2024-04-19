import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/pages/Home";
import Boekhouders from "./components/pages/Boekhouders";
import Ondernemers from "./components/pages/Ondernemers";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import BlogDetail from './components/BlogDetail'; 
import Footer from './components/Footer';
import CookiesPrivacy from './components/pages/CookiesPrivacy';
import Voorwaarden from './components/pages/Voorwaarden';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/translations/i18n';
import { LanguageProvider } from './hooks/LanguageProvider'; 

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider> 
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Boekhouders" element={<Boekhouders />} />
            <Route path="/Ondernemers" element={<Ondernemers />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog/:id/*" element={<BlogDetail />} /> 
            <Route path="/Cookies&Privacy" element={<CookiesPrivacy />} /> 
            <Route path="/AlgemeneVoorwaarden" element={<Voorwaarden />} /> 
          </Routes>
          <Footer/>
        </Router>
      </LanguageProvider>
    </I18nextProvider>
  );
}

export default App;
