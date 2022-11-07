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
import GrievancesRoutes from './Pages/Grievances/GrievancesRoutes';
import IndividualRoutes from './Components/IndividualRoutes/IndividualRoutes';
import NewHeader from './Components/Header/NewHeader';
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';
import { contextVar } from './Components/GlobalState/ContextVar';


function App() {
  const [sideShow, setsideShow] = useState(false);
  const [moduleName, setmoduleName] = useState("JUIDCO")
  const setHeader = (e) => {
    // console.log(e.target)
    sideShow ? setsideShow(false) : setsideShow(true);
  }

  window.onclick = () => {
    // alert("click on dom");
  }

  const globals = {
    moduleName: moduleName,
    setModule: setmoduleName
  }
  console.log("values ", globals)

  return (
    <>
      <contextVar.Provider values={globals} >
        <BrowserRouter>
          <NewHeader showSidebar={setHeader} show={sideShow} />
          <Sidebar showSidebar={setHeader} show={sideShow} />
          <div className={`${sideShow ? 'opacity-70' : ''}`}>
            <Routes>
              <Route path="/" element={<IndividualRoutes />} />
              <Route index element={<IndividualRoutes />} />
            </Routes>

            <PropertyRoutes />
            <WaterRoutes />
            <TradeRoutes />
            <GrievancesRoutes />
          </div>
        </BrowserRouter>
      </contextVar.Provider>
    </>
  );
}

export default App;
