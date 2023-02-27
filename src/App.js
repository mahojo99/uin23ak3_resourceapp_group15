import './css/main.css';
import CSS from './pages/CSS';
import Html from './pages/Html';
import React from './pages/React';
import JavaScript from './pages/Javascipt';
import Sanity from './pages/Sanity';

//Branch Layout

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Layout />} />
        <Route path='/html' element={<HTML />} />
        <Route path='/css' element={<CSS />} />
        <Route path='/javascript' element={<JAVASCRIPT />} />
        <Route path='/react' element={<REACT />} />
        <Route path='/sanity' element={<SANITY />} />
      </Routes>

    </>
  );


}

export default App;