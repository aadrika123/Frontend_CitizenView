import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WaterDocScreen from '../../Components/WaterComponent/WaterDocScreen'
import WaterCitizenEntryForm from './WaterCitizenEntryForm'
import WaterIndex from './WaterIndex'

function WaterRoutes() {
    return (
        <Routes>
            <Route path='/water-index' element={<WaterIndex />} />
            <Route path='/water-requiredDoc' element={<WaterDocScreen />} />
            <Route path='/water-applyNew' element={<WaterCitizenEntryForm />} />
        </Routes>
    )
}

export default WaterRoutes