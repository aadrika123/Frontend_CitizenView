
import { useState } from 'react'
import Screen1 from '../../../Components/TradeComponents/InputScreens/Screen1'
import Screen2 from '../../../Components/TradeComponents/InputScreens/Screen2'
import Screen3 from '../../../Components/TradeComponents/InputScreens/Screen3'
import Screen4 from '../../../Components/TradeComponents/InputScreens/Screen4'
import Screen5 from '../../../Components/TradeComponents/InputScreens/Screen5'
import Screen6 from '../../../Components/TradeComponents/InputScreens/Screen6'
import Screen7 from '../../../Components/TradeComponents/InputScreens/Screen7'
import Screen8 from '../../../Components/TradeComponents/InputScreens/Screen8'


function NewApplication() {
    //formIndex variable to hold number of screen to show in form
    const [formIndex, setFormIndex] = useState(1)

    //backward 1 step from currentIndex
    const backFun = () => setFormIndex(prev => prev - 1)

    //forward 1 step from currentIndex
    const nextFun = () => setFormIndex(prev => prev + 1)

    console.log('form index', formIndex)

    return (
        <>
            {formIndex == 1 && <Screen1 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 2 && <Screen2 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 3 && <Screen3 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 4 && <Screen4 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 5 && <Screen5 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 6 && <Screen6 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 7 && <Screen4 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
            {formIndex == 8 && <Screen4 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}

        </>
    )
}

export default NewApplication;