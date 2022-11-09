import React, { useContext, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { contextVar } from '../../Components/GlobalState/ContextVar'
import NewApplication from './NewApplication/NewApplication'
import TradeIndex from './TradeIndex'


function TradeRoutes() {
    // const globalData = useContext(contextVar)
    // useEffect(() => {
    //     globalData.setModule('TRADE');
    // }, [])
   
    return (
        <Routes>
            <Route path='/trade-index' element={<TradeIndex />} />
            <Route path='/trade-new-apply' element={<NewApplication />} />
        </Routes>
    )
}

export default TradeRoutes