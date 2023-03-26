import React from 'react';
import {
    Routes,
    Route,
    useLocation
  } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

import Layout from '../pages/Layout.js'
import Home from '../pages/Home.js'
import Menu from '../pages/Menu.js'
import About from '../pages/About.js'
import Contact from '../pages/Contact.js'

import All from '../pages/menu/All.js'
import Bread from '../pages/menu/Bread.js'
import Cakes from '../pages/menu/Cakes.js'
import Drinks from '../pages/menu/Drinks.js'

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu/" element={<Menu />}>
            <Route index element={<All />} />
            <Route path="bread" element={<Bread />} />
            <Route path="cakes" element={<Cakes />} />
            <Route path="drinks" element={<Drinks />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;