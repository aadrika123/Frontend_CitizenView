//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Grievance Complaints 
//    DESCRIPTION - Citizen can check status or take action to their complaints
//////////////////////////////////////////////////////////////////////////////////////

import React, {useState, useEffect} from 'react'
import ComplaintList from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintList'
import ComplaintSummary from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintSummary'
import ComplaintRate from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintRate'
import ComplaintReopen from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintReopen'
import ComplaintRateSuccess from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintRateSuccess'
import ComplaintReopenImage from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintReopenImage'
import ComplaintAdditionalDetails from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintAdditionalDetails'
import ComplaintReopenSuccess from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintReopenSuccess'
import axios from 'axios'
import apiLinks from "../../Components/GrievancesComponent/Api/GrievanceApi"

const GrievancesComplaints = () => {

   // Toggle components
    const [toggleRate ,setToggleRate] = useState(false)
    const [toggleReopen ,setToggleReopen] = useState(false)
    const [toggleSubmitRate ,setToggleSubmitRate] = useState(false)

   //  Collecting datas
    const [storeData, setStoreData] = useState({})

     //formIndex variable to hold number of screen to show in form
     const [formIndex, setFormIndex] = useState(1)

   //   calling api
     const {reopenComplaint} = apiLinks()

     const reopenNext = (data) => {
      setFormIndex(prev => prev+1)
      setToggleRate(false)
      setToggleReopen(true)
      setToggleSubmitRate(false)
      console.log("data get => ",data)
      setStoreData(Object.assign(storeData,data))
    };

    const reopenSuccess = (data) => {
      console.log("data get => ",data)
      setStoreData(Object.assign(storeData,data))
      submitReopen()
    };

   //  submit reopen grievance
    const submitReopen = () => {
      axios.post(reopenComplaint, storeData)
      .then((res) => {
         console.log("successfully reopened...", storeData)
         setFormIndex(prev => prev + 1)
         setToggleRate(false)
         setToggleReopen(true)
         setToggleSubmitRate(false)
      })
      .catch((err) => console.log(err))
    }

    useEffect(() => {
      console.log("stored data => ", storeData)
    }, [reopenNext])

     //backward 1 step from currentIndex
     const backFun = () => {
        setFormIndex(prev => prev - 1)
        setToggleRate(false)
        setToggleReopen(false)
        setToggleSubmitRate(false)
    }

    const backReopen = () => {
      setFormIndex(prev => prev - 1)
      setToggleRate(false)
      setToggleReopen(true)
      setToggleSubmitRate(false)
  }
 
     //forward 1 step from currentIndex
     const summary = () => setFormIndex(2)

     const rate = () => {
        setFormIndex(3)
        setToggleRate(true)
        setToggleReopen(false)
     }

     const submitRate = () => {
        setFormIndex(4)
        setToggleRate(false)
        setToggleReopen(false)
        setToggleSubmitRate(true)
     }

     const reopen = () => {
        setFormIndex(3)
        setToggleRate(false)
        setToggleReopen(true)
     }

 
     console.log('form index',formIndex)
 
     return (
         <>

                {formIndex == 1 && <ComplaintList summary={summary} backFun={backFun} />}
                {formIndex == 2 && <ComplaintSummary summary={summary} backFun={backFun} rate={rate} reopen={reopen} />}
                {(formIndex == 3 && toggleRate) ? <ComplaintRate backFun={backFun} submitRate={submitRate} /> : null}
                {(formIndex == 3 && toggleReopen) ? <ComplaintReopen backFun={backFun} reopenNext={reopenNext}/> : null}
                {(formIndex == 4 && toggleSubmitRate) ? <ComplaintRateSuccess /> : null}
                {(formIndex == 4 && toggleReopen) ? <ComplaintReopenImage backFun={backReopen} reopenNext={reopenNext}/> : null}
                {(formIndex == 5 && toggleReopen) ? <ComplaintAdditionalDetails backFun={backReopen} reopenSuccess={reopenSuccess}/> : null}
                {(formIndex == 6 && toggleReopen) ? <ComplaintReopenSuccess /> : null}

         </>
     )
 }

export default GrievancesComplaints