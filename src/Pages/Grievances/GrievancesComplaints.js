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
// Importing api links
import apiLinks from "../../Components/GrievancesComponent/Api/GrievanceApi"
import { GlobalData } from '../../Components/GrievancesComponent/Context/contextVar'


const GrievancesComplaints = () => {

   // Toggle components
    const [toggleRate ,setToggleRate] = useState(false)
    const [toggleReopen ,setToggleReopen] = useState(false)
    const [toggleSubmitRate ,setToggleSubmitRate] = useState(false)
    const [getId, setGetId] = useState(0)

    const postId = (index) => {
      console.log("getting id => ", index)
      setGetId(index)
    }

   //  Collecting datas
    const [storeData, setStoreData] = useState({})

     //formIndex variable to hold number of screen to show in form
     const [formIndex, setFormIndex] = useState(1)

   //   calling api
     const {reopenComplaint} = apiLinks()

   //   Forwarding Components for Reopening Complaint
     const reopenNext = (data) => {
      setFormIndex(prev => prev+1)
      setToggleRate(false)
      setToggleReopen(true)
      setToggleSubmitRate(false)
      console.log("data get => ",data)
      setStoreData(Object.assign(storeData,data))
    };

   //  Forwarding to reopen success
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

   //  backwarding for reopen complaint component
    const backReopen = () => {
      setFormIndex(prev => prev - 1)
      setToggleRate(false)
      setToggleReopen(true)
      setToggleSubmitRate(false)
  }
 
     //forward forwarding to complaint Summary
     const summary = () => {setFormIndex(2)}

   //   formwarding to complaint rate
     const rate = () => {
        setFormIndex(3)
        setToggleRate(true)
        setToggleReopen(false)
     }

   //   Forwarding to rating complaint success
     const submitRate = () => {
        setFormIndex(4)
        setToggleRate(false)
        setToggleReopen(false)
        setToggleSubmitRate(true)
     }

   //   forwarding to reopen complaint
     const reopen = () => {
        setFormIndex(3)
        setToggleRate(false)
        setToggleReopen(true)
     }

     console.log('form index',formIndex)
 
     return (
         <>

            <GlobalData.Provider value={{getId : getId, postId: postId}}>
                {/* Complaint List */}
                {formIndex == 1 && <ComplaintList summary={summary} backFun={backFun} />}

                {/* Complaint Summary */}
                {formIndex == 2 && <ComplaintSummary summary={summary} backFun={backFun} rate={rate} reopen={reopen} />}
                
                {/* Complaint Rate */}
                {(formIndex == 3 && toggleRate) ? <ComplaintRate backFun={backFun} submitRate={submitRate} /> : null}

                {/* Complaint Reopening Reason */}
                {(formIndex == 3 && toggleReopen) ? <ComplaintReopen backFun={backFun} reopenNext={reopenNext} /> : null}

                {/* Complaint Rating Success */}
                {(formIndex == 4 && toggleSubmitRate) ? <ComplaintRateSuccess /> : null}

                {/* Complaint Reopening Image */}
                {(formIndex == 4 && toggleReopen) ? <ComplaintReopenImage backFun={backReopen} reopenNext={reopenNext}/> : null}

                {/* Complaint Reopening Additional Details */}
                {(formIndex == 5 && toggleReopen) ? <ComplaintAdditionalDetails backFun={backReopen} reopenSuccess={reopenSuccess}/> : null}

                {/* Complaint Reopen Success */}
                {(formIndex == 6 && toggleReopen) ? <ComplaintReopenSuccess /> : null}

                </GlobalData.Provider>

         </>
     )
 }

export default GrievancesComplaints