import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Anotation from 'pages/Anotation';
import Register from 'pages/Register';

const RoutesTSX = () => (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/anotacao" element={<Anotation/>} />
      </Routes>
    </BrowserRouter>
  );

export default RoutesTSX;
