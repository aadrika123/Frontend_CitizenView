import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PropertyIndex from './PropertyIndex'

function PropertyRoutes() {
    return (
        <>
            <Routes>
                <Route path='/property-index' element={<PropertyIndex />} />
            </Routes>
        </>
    )
}

export default PropertyRoutes