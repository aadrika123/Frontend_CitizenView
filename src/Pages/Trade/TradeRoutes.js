import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TradeIndex from './TradeIndex'

function TradeRoutes() {
    return (
        <Routes>
             <Route path='/trade-index' element={<TradeIndex />} />
        </Routes>
    )
}

export default TradeRoutes