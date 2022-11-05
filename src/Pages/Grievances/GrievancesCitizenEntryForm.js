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
import apiLinks from "../../Components/GrievancesComponent/Api/GrievanceApi"

const GrievancesCitizenEntryForm = () => {
  const [storeData, setStoreData] = useState({})
  const [tempData, setTempData] = useState([])

  const{fileComplaint} = apiLinks()

  const postData = (data) => {
    console.log("data get => ",data)
    setStoreData(Object.assign(storeData,data))
    setTempData(storeData)
  };


  useEffect(() => {
    console.log("stored data => ", storeData)
  }, [postData])

  const submitData = (data) => {
    console.log("data get => ",data)
    setStoreData(Object.assign(storeData,data))
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

        {formIndex == 1 && (
          <ComplaintType
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}
        {formIndex == 2 && (
          <ComplaintSubType
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}
        {formIndex == 3 && (
          <ComplaintPincode
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}
        {formIndex == 4 && (
          <ComplaintAddress
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}
        {formIndex == 5 && (
          <ComplaintLandmark
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}
        {formIndex == 6 && (
          <ComplaintImage
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}
        {formIndex == 7 && (
          <ComplaintAdditionalDetails
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            submitData={submitData}
          />
        )}
        {formIndex == 8 && (
          <ComplaintFileSuccess
            nextFun={nextFun}
            backFun={backFun}
            formIndex={formIndex}
            postData={postData}
          />
        )}

    </>
  );
};

export default GrievancesCitizenEntryForm;