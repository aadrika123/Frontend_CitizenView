import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PropertyCitizenEntryForm from './PropertyCitizenEntryForm'
import PropertyIndex from './PropertyIndex'
import PropertyViewAndPayDemand from './PropertyViewAndPayDemand'
import SearchAndPay from './SearchAndPay'
import ViewAppliedApplications from './ViewAppliedApplications'

function PropertyRoutes() {
    return (
        <>
            <Routes>
                <Route path='/property-index' element={<PropertyIndex />} />
                <Route path='/property-citizen-form' element={<PropertyCitizenEntryForm />} />
                <Route path='/search-and-pay' element={<SearchAndPay />} />
                <Route path='/view-applied-applications' element={<ViewAppliedApplications />} />
                {/* <Route path='/view-and-pay-demand' element={<PropertyViewAndPayDemand />} /> */}

            </Routes>
        </>
    )
}

export default PropertyRoutes