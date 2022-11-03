import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GrievanceIndex from './GrievanceIndex'

function GrievanceRoutes() {
    return (
        <>
            <Routes>
                <Route path='/grievance-index' element={<GrievanceIndex />} />
            </Routes>
        </>
    )
}

export default GrievanceRoutes