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
    let baseUrl = "http://192.168.0.240:82"
    let userId = 1

    let apiList = {
        
        // Register Complaint
        fileComplaint : `${baseUrl}/api/grievance/postFileComplaint`,

        // Rate Complaint
        rateComplaint : `${baseUrl}/api/grievance/updateRateComplaintById`,

        // Reopen Complaint
        reopenComplaint : `${baseUrl}/api/grievance/putReopenComplaintById`,

        // Get All Complaint List
        listComplaint : `${baseUrl}/api/grievance/getAllComplaintList/${userId}`, 

        // Get particular Complaint List
        summaryComplaint : `${baseUrl}/api/grievance/getAllComplaintList`
    
    }

    return apiList;

}

export default GrievanceApi

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Export to : GrievancesCitizenEntryForm.js, GrievancesComplaints.js, ComplaintList.js, ComplaintRate.js, ComplaintSummary.js
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
