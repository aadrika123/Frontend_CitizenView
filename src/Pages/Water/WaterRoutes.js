import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ApplicationDetailScreen from '../../Components/WaterComponent/ApplicationDetailScreen'
import MyApplication from '../../Components/WaterComponent/MyApplication'
import MyConnectionScreen from '../../Components/WaterComponent/MyConnectionScreen'
import SubmitScreen from '../../Components/WaterComponent/SubmitScreen'
import ViewBreakupScreen from '../../Components/WaterComponent/ViewBreakupScreen'
import ViewHistoryScreen from '../../Components/WaterComponent/ViewHistoryScreen'
import WaterDocScreen from '../../Components/WaterComponent/WaterDocScreen'
import HolderDetailScreen from '../../Components/WaterComponent/WaterNewApply/HolderDetailScreen'
import SearchPropertyScreen from '../../Components/WaterComponent/WaterNewApply/SearchPropertyScreen'
import WaterCitizenEntryForm from './WaterCitizenEntryForm'
import WaterIndex from './WaterIndex'

function WaterRoutes() {
    return (
        <Routes>
            <Route path='/water-index' element={<WaterIndex />} />
            <Route path='/water-requiredDoc' element={<WaterDocScreen />} />
            <Route path='/water-applyNew' element={<WaterCitizenEntryForm />} />
            <Route path='/water-searchProprty' element={<SearchPropertyScreen/>} />
            <Route path='/water-holderDetail' element={<HolderDetailScreen/>} />
            <Route path='/water-submitNewApply' element={<SubmitScreen/>} />
            <Route path='/water-myApplication' element={<MyApplication/>} />
            <Route path='/water-viewDetail' element={<ApplicationDetailScreen/>} />
            <Route path='/water-viewHistory' element={<ViewHistoryScreen/>} />
            <Route path='/water-viewBreakup' element={<ViewBreakupScreen/>} />
            <Route path='/water-myConnection' element={<MyConnectionScreen/>} />
            
        </Routes>
    )
}

export default WaterRoutes