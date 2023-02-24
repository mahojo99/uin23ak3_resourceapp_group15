import logo from './logo.svg';
import './css/main.css';
import { Routes, Route } from 'react-router-dom';
import ContenPage from './components/ContentPage';



function App() {
  return (
    <>
    <Routes>
      <Route index element={<ContenPage />}/>
    </Routes>

    </>
  );
}

export default App;