Grievance Api Requirements
============================================================================

For Citizen
----------------------------------------------------------------------------
<!-- File new complaint -->
postFileComplaint
    request
        ├──complaintType
        ├──complaintSubType
        ├──complaintPincode
        ├──complaintCity
        ├──complaintLocality
        ├──complaintWardNo
        ├──complaintHouseNo
        ├──complaintLandmark
        ├──complaintImage
        └──complaintAdditionalDetails
    response
        ├──complaintFiledDate <!-- Generate new -->
        ├──complaintNo <!-- Generate new -->
        ├──complaintStatus <!-- Open or Closed -->
        └──complaintApplicationStatus <!-- Pending or ...........  -->

<!-- Get all complaints by Id -->
getAllComplaintById
    request
        └──id
    response
        ├──complaintFiledDate
        ├──complaintStatus 
        ├──complaintNo
        ├──complaintApplicationStatus 
        ├──complaintType
        ├──complaintSubType
        ├──complaintPincode
        ├──complaintCity
        ├──complaintLocality
        ├──complaintWardNo
        ├──complaintHouseNo
        ├──complaintLandmark
        ├──complaintImage
        └──complaintAdditionalDetails

<!-- Comment on complaint -->
postCommentComplaintById
    └──complaintComment

<!-- Rate on complaint -->
postRateComplaintById
   ├──complaintRate
   ├──complaintRemark
   └──complaintComment

<!-- Reopen complaint by updating and adding these details -->
putReopenComplaintById
    request
        ├──complaintReopenReason <!-- Add -->
        ├──complaintReopenImage
        └──complaintReopenAdditionalDetails <!-- update -->
    response
        ├──complaintFiledDate
        ├──complaintStatus <!-- Open or Closed -->
        ├──complaintNo
        ├──complaintApplicationStatus <!-- Pending or ......... -->
        ├──complaintType
        ├──complaintSubType
        ├──complaintPincode
        ├──complaintCity
        ├──complaintLocality
        ├──complaintWardNo
        ├──complaintHouseNo
        ├──complaintLandmark
        ├──complaintImage
        └──complaintAdditionalDetails