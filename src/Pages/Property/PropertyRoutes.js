import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PropertyCitizenEntryForm from './PropertyCitizenEntryForm'
import PropertyIndex from './PropertyIndex'
import SearchAndPay from './SearchAndPay'

function PropertyRoutes() {
    return (
        <>
            <Routes>
                <Route path='/property-citizen-form' element={<PropertyCitizenEntryForm />} />
                <Route path='/search-and-pay' element={<SearchAndPay />} />
            </Routes>
        </>
    )
}

export default PropertyRoutes