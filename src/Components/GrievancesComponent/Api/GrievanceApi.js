//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 4th November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Api List
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'

const GrievanceApi = () => {

    let baseUrl = "  http://localhost:8000"

    let apiList = {
        
        // Register Complaint
        fileComplaint : `${baseUrl}/fileComplaint`,

        // Rate Complaint
        rateComplaint : `${baseUrl}/rateComplaint`,

        // Reopen Complaint
        reopenComplaint : `${baseUrl}/reopenComplaint`
    
    }

    return apiList;

}

export default GrievanceApi