import './css/main.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CSS from './pages/CSS'
import JAVASCRIPT from './pages/JAVASCRIPT';
import HTML from './pages/HTML';
import REACT from './pages/REACT';
import SANITY from './pages/SANITY';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index path='/html' element={<HTML />} />
        <Route path='/css' element={<CSS />} />
        <Route path='/javascript' element={<JAVASCRIPT />} />
        <Route path='/react' element={<REACT />} />
        <Route path='/sanity' element={<SANITY />} />
      </Routes>
    </Layout>


  );

  /*return (

    <Routes>
      <Route index element={<Layout />} />
      <Route path='/html' element={<HTML />} />
      <Route path='/css' element={<CSS />} />
      <Route path='/javascript' element={<JAVASCRIPT />} />
      <Route path='/react' element={<REACT />} />
      <Route path='/sanity' element={<SANITY />} />
    </Routes>

  );*/
}


