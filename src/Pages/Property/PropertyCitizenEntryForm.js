import { useState } from 'react'
import Screen1 from '../../Components/PropertyComponents/InputScreens/Screen1'
import Screen2 from '../../Components/PropertyComponents/InputScreens/Screen2'

function PropertyCitizenEntryForm() {
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
        </>
    )
}

export default PropertyCitizenEntryForm