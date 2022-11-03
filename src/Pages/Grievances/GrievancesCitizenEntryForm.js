//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Grievance Entry Form
//    DESCRIPTION - Citizen register their complaints
//////////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react'
import Screen1 from '../../Components/GrievancesComponent/GrievancesForm/Screen1'
import Screen2 from '../../Components/GrievancesComponent/GrievancesForm/Screen2'
import Screen3 from '../../Components/GrievancesComponent/GrievancesForm/Screen3'
import Screen4 from '../../Components/GrievancesComponent/GrievancesForm/Screen4'
import Screen5 from '../../Components/GrievancesComponent/GrievancesForm/Screen5'
import Screen6 from '../../Components/GrievancesComponent/GrievancesForm/Screen6'
import Screen7 from '../../Components/GrievancesComponent/GrievancesForm/Screen7'
import Screen8 from '../../Components/GrievancesComponent/GrievancesForm/Screen8'

const GrievancesCitizenEntryForm = () => {

        //formIndex variable to hold number of screen to show in form
        const [formIndex, setFormIndex] = useState(1)

        //backward 1 step from currentIndex
        const backFun = () => setFormIndex(prev => prev - 1)
    
        //forward 1 step from currentIndex
        const nextFun = () => setFormIndex(prev => prev + 1)
    
        console.log('form index',formIndex)
    
        return (
            <>
                {formIndex == 1 && <Screen1 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
                {formIndex == 2 && <Screen2 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
                {formIndex == 3 && <Screen3 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
                {formIndex == 4 && <Screen4 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
                {formIndex == 5 && <Screen5 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
                {formIndex == 6 && <Screen6 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
                {formIndex == 7 && <Screen7 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
                {formIndex == 8 && <Screen8 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            </>
        )
    }


export default GrievancesCitizenEntryForm