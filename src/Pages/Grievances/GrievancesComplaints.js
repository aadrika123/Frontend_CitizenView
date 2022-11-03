//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Grievance Complaints 
//    DESCRIPTION - Citizen can check status or take action to their complaints
//////////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react'
import ComplaintList from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintList'
import ComplaintSummary from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintSummary'
import ComplaintRate from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintRate'
import ComplaintReopen from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintReopen'
import ComplaintRateSuccess from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintRateSuccess'
import ComplaintReopenImage from '../../Components/GrievancesComponent/GrievancesComplaints/ComplaintReopenImage'

const GrievancesComplaints = () => {

    const [toggleRate ,setToggleRate] = useState(false)
    const [toggleReopen ,setToggleReopen] = useState(false)
    const [toggleSubmitRate ,setToggleSubmitRate] = useState(false)

     //formIndex variable to hold number of screen to show in form
     const [formIndex, setFormIndex] = useState(1)

     //backward 1 step from currentIndex
     const backFun = () => {
        setFormIndex(prev => prev - 1)
        setToggleRate(false)
        setToggleReopen(false)
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

     const reopenNext = () => {
        setFormIndex(prev => prev+1)
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
                {(formIndex == 4 && toggleSubmitRate) ? <ComplaintRateSuccess backFun={backFun} /> : null}
                {/* {formIndex = 4  && <ComplaintReopenImage/>} */}

         </>
     )
 }

export default GrievancesComplaints