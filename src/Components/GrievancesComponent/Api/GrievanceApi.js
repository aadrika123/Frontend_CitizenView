//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 4th November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Api List
//    Description - Creating api constants
//////////////////////////////////////////////////////////////////////////////////////

const GrievanceApi = () => {

    // creating api variable
    let baseUrl = "http://localhost:8000"

    let apiList = {
        
        // Register Complaint
        fileComplaint : `${baseUrl}/fileComplaint`,

        // Rate Complaint
        rateComplaint : `${baseUrl}/rateComplaint`,

        // Reopen Complaint
        reopenComplaint : `${baseUrl}/reopenComplaint`,

        // Get Complaint List
        listComplaint : `${baseUrl}/fileComplaint`,
    
    }

    return apiList;

}

export default GrievanceApi

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Export to : GrievancesCitizenEntryForm.js, GrievancesComplaints.js, ComplaintList.js, ComplaintRate.js, ComplaintSummary.js
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
