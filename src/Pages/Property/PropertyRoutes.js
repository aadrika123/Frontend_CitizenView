import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PropertyCitizenEntryForm from './PropertyCitizenEntryForm'
import PropertyIndex from './PropertyIndex'

function PropertyRoutes() {
    return (
        <>
            <Routes>
                <Route path='/property-citizen-form' element={<PropertyCitizenEntryForm />} />
            </Routes>
        </>
    )
}

export default PropertyRoutes