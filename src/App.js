import './css/main.css';
import { Routes, Route } from 'react-router-dom';
import ContentPage from './components/Layout';
import CSS from './pages/CSS'
import JAVASCRIPT from './pages/JAVASCRIPT';
import HTML from './pages/HTML';
import REACT from './pages/REACT';
import SANITY from './pages/SANITY';



function App() {
  return (
    <>
    <Routes>
      <Route index element={<Layout />}/>
      <Route path='/html'element={<HTML />}/>
      <Route path='/css'element={<CSS />}/>
      <Route path='/javascript'element={<JAVASCRIPT />}/>
      <Route path='/react'element={<REACT />}/>
      <Route path='/sanity'element={<SANITY />}/>
    </Routes>

    </>
  );
}

export default App;