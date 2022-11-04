import { useState } from 'react'
import Screen1 from '../../Components/PropertyComponents/InputScreens/Screen1'
import Screen10 from '../../Components/PropertyComponents/InputScreens/Screen10'
import Screen11 from '../../Components/PropertyComponents/InputScreens/Screen11'
import Screen12 from '../../Components/PropertyComponents/InputScreens/Screen12'
import Screen13 from '../../Components/PropertyComponents/InputScreens/Screen13'
import Screen14 from '../../Components/PropertyComponents/InputScreens/Screen14'
import Screen15 from '../../Components/PropertyComponents/InputScreens/Screen15'
import Screen16 from '../../Components/PropertyComponents/InputScreens/Screen16'
import Screen17 from '../../Components/PropertyComponents/InputScreens/Screen17'
import Screen2 from '../../Components/PropertyComponents/InputScreens/Screen2'
import Screen3 from '../../Components/PropertyComponents/InputScreens/Screen3'
import Screen4 from '../../Components/PropertyComponents/InputScreens/Screen4'
import Screen5 from '../../Components/PropertyComponents/InputScreens/Screen5'
import Screen6 from '../../Components/PropertyComponents/InputScreens/Screen6'
import Screen7 from '../../Components/PropertyComponents/InputScreens/Screen7'
import Screen8 from '../../Components/PropertyComponents/InputScreens/Screen8'
import Screen9 from '../../Components/PropertyComponents/InputScreens/Screen9'

function PropertyCitizenEntryForm() {
    //formIndex variable to hold number of screen to show in form
    const [formIndex, setFormIndex] = useState(1)

    //backward 1 step from currentIndex
    const backFun = () => setFormIndex(prev => prev - 1)

    //forward 1 step from currentIndex
    const nextFun = () => setFormIndex(prev => prev + 1)

    console.log('form index',formIndex)

    const screen1Data =(e)=>{
        console.log("Screen 1 Data in Entry Form",e)
    }
    const screen2Data =(e)=>{
        console.log("Screen 2 Data in Entry Form",e)
    }

    return (
        <>
            {formIndex == 1 && <Screen1 nextFun={nextFun} backFun={backFun} data={screen1Data} formIndex={formIndex} />}
            {formIndex == 2 && <Screen2 nextFun={nextFun} backFun={backFun} data={screen2Data} formIndex={formIndex} />}
            {formIndex == 3 && <Screen3 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 4 && <Screen4 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 5 && <Screen5 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 6 && <Screen6 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 7 && <Screen7 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 8 && <Screen8 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 9 && <Screen9 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 10 && <Screen10 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 11 && <Screen11 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 12 && <Screen12 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 13 && <Screen13 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 14 && <Screen14 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 15 && <Screen15 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 16 && <Screen16 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 17 && <Screen17 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
        </>
    )
}

export default PropertyCitizenEntryForm