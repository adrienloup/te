import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerAccount from './pages/CustomerAccount/CustomerAccount';
import ElectricityAndGas from './pages/ElectricityAndGas/ElectricityAndGas';
import ElectricVehicles from './pages/ElectricVehicles/ElectricVehicles';
import Home from './pages/Home/Home';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/te/customer-account" element={<CustomerAccount />} />
        <Route path="/te/electricity-and-gas" element={<ElectricityAndGas />} />
        <Route path="/te/electric-vehicles" element={<ElectricVehicles />} />
        <Route path="/te" element={<Home />} />
        <Route path="/te/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
