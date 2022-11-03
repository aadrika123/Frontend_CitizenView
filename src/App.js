import logo from './logo.svg';
import { BrowserRouter, useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './index.css'
import PropertyIndex from './Pages/Property/PropertyIndex';
import WaterIndex from './Pages/Water/WaterIndex';
import TradeIndex from './Pages/Trade/TradeIndex';
import PropertyRoutes from './Pages/Property/PropertyRoutes';
import WaterRoutes from './Pages/Water/WaterRoutes';
import TradeRoutes from './Pages/Trade/TradeRoutes';
import Header from './Components/Header/Header';
import IndividualRoutes from './Components/IndividualRoutes/IndividualRoutes';
import GrievanceRoutes from './Pages/Grievances/GrievanceRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<IndividualRoutes />} />
          <Route index element={<IndividualRoutes />} />
        </Routes>

        <PropertyRoutes />
        <WaterRoutes />
        <TradeRoutes />
        <GrievanceRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
