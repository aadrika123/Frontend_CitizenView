//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Grievance Entry Form
//    DESCRIPTION - Citizen register their complaints
//////////////////////////////////////////////////////////////////////////////////////

import axios from "axios";
import React, { useState, useEffect } from "react";
import ComplaintType from "../../Components/GrievancesComponent/GrievancesForm/ComplaintType";
import ComplaintSubType from "../../Components/GrievancesComponent/GrievancesForm/ComplaintSubType";
import ComplaintPincode from "../../Components/GrievancesComponent/GrievancesForm/ComplaintPincode";
import ComplaintAddress from "../../Components/GrievancesComponent/GrievancesForm/ComplaintAddress";
import ComplaintLandmark from "../../Components/GrievancesComponent/GrievancesForm/ComplaintLandmark";
import ComplaintImage from "../../Components/GrievancesComponent/GrievancesForm/ComplaintImage";
import ComplaintAdditionalDetails from "../../Components/GrievancesComponent/GrievancesForm/ComplaintAdditionalDetails";
import ComplaintFileSuccess from "../../Components/GrievancesComponent/GrievancesForm/ComplaintFileSuccess";
// Importing api links
import apiLinks from "../../Components/GrievancesComponent/Api/GrievanceApi"

const GrievancesCitizenEntryForm = () => {

  // storing datas
  const [storeData, setStoreData] = useState({})

  // calling api
  const{fileComplaint} = apiLinks()

  // collecting data
  const postData = (data) => {
    console.log("data get => ",data)
    setStoreData(Object.assign(storeData,data))
  };


  useEffect(() => {
    console.log("stored data => ", storeData)
  }, [postData])

  // submiting complaint data
  const submitData = (data) => {
    console.log("data get => ",data)
    setStoreData(Object.assign(storeData,data))

    // static added data for dummy server api
    setStoreData(Object.assign(storeData,{complaintStatus: "Open", complaintApplicationStatus: "Pending for assignment", complaintFiledDate: "04-Feb-2021", complaintNo: "PG-PGR-2021-02-04-0005553",}))
    
    axios.post(fileComplaint,storeData)
    .then((response) => {
        setFormIndex(prev => prev+1)
        console.log("data posted successfully....", storeData)
    })
    .catch((error) => console.log("data post error => ", error))
  }

  //formIndex variable to hold number of screen to show in form
  const [formIndex, setFormIndex] = useState(1);

  //backward 1 step from currentIndex
  const backFun = () => setFormIndex((prev) => prev - 1);

  //forward 1 step from currentIndex
  const nextFun = () => setFormIndex((prev) => prev + 1);

  console.log("form index", formIndex);

  return (
    <>

        {/* Complaint Type */}
        {formIndex == 1 && (
          <ComplaintType
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}

        {/* Complaint Pin Code */}
        {formIndex == 2 && (
          <ComplaintPincode
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}

        {/* Complaint Address */}
        {formIndex == 3 && (
          <ComplaintAddress
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}

        {/* Complaint Landmark */}
        {formIndex == 4 && (
          <ComplaintLandmark
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}

        {/* Complaint Image */}
        {formIndex == 5 && (
          <ComplaintImage
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}

        {/* Complaint Additional Details */}
        {formIndex == 6 && (
          <ComplaintAdditionalDetails
            backFun={backFun}
            formIndex={formIndex}
            submitData={submitData}
            postData={postData}
          />
        )}

        {/* Complaint succes screen */}
        {formIndex == 7 && (
          <ComplaintFileSuccess/>
        )}

    </>
  );
};

export default GrievancesCitizenEntryForm;