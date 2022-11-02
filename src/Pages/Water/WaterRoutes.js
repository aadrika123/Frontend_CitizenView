import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WaterIndex from './WaterIndex'

function WaterRoutes() {
    return (
        <Routes>
            <Route path='/water-index' element={<WaterIndex />} />
        </Routes>
    )
}

export default WaterRoutes