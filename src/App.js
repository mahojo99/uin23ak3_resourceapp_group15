import './css/main.css';
import CSS from './pages/CSS';
import Html from './pages/Html';
import React from './pages/React';
import JavaScript from './pages/Javascipt';
import Sanity from './pages/Sanity';

//Branch Layout

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          // <Route index element={<Home />} /> 
          <Route path="html" element={<Html />} />
          <Route path="css" element={<CSS />} />
          <Route path="javascript" element={<JavaScript />} />
          <Route path="react" element={<React />} />
          <Route path="sanity" element={<Sanity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
  
}

export default App;