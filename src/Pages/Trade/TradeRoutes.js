import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewApplication from './NewApplication/NewApplication'
import TradeIndex from './TradeIndex'

function TradeRoutes() {
    return (
        <Routes>
             <Route path='/trade-index' element={<TradeIndex />} />
             <Route path='/trade-new-apply' element={<NewApplication />} />
        </Routes>
    )
}

export default TradeRoutes