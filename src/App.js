import logo from './logo.svg';
import { BrowserRouter, useNavigate, Route, Routes, useParams, useLocation } from 'react-router-dom';
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
import { useEffect, useRef, useState } from 'react';
import { contextVar } from './Components/GlobalState/ContextVar';

function App() {
  const [sideShow, setsideShow] = useState(true);
  const [moduleName, setmoduleName] = useState("JUIDCO")
  const [sidebarBody, setsidebarBody] = useState('')

  const setHeader = (e) => {
    sideShow ? setsideShow(false) : setsideShow(true);
  }

  const globals = {
    moduleName: moduleName,
    setModule: setmoduleName
  }


  // useEffect(() => {
  //   JSON.stringify(window.location.href).split("/")[3].startsWith("home") && setmoduleName('JUIDCO');
  //   JSON.stringify(window.location.href).split("/")[3].startsWith("trade") && setmoduleName('TRADE');
  //   JSON.stringify(window.location.href).split("/")[3].startsWith("water") && setmoduleName('WATER');
  //   JSON.stringify(window.location.href).split("/")[3].startsWith("prop") && setmoduleName('PROPERTY');

  //   console.log("params : ", JSON.stringify(window.location.href).split("/")[3]);
  // }, [])


  return (
    <>
      <contextVar.Provider value={globals} >
        <BrowserRouter>
          <NewHeader showSidebar={setHeader} show={sideShow} />
          <Sidebar showSidebar={setHeader} show={sideShow} sidebarBody={sidebarBody} sidebarBodyFun={setsidebarBody} />
          <div className={`${sideShow ? 'opacity-70 md:opacity-100' : ''}`}>
            <Routes>
              <Route path="/" element={<IndividualRoutes />} />
              <Route path="/home" element={<IndividualRoutes />} />
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
