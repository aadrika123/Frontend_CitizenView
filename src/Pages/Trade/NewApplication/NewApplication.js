
import { useState } from 'react'
import Screen9 from '../../../Components/PropertyComponents/InputScreens/Screen9'
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
            {/* Information Screen */}
            {formIndex == 1 && <Screen1 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}

            {/* Apply With Screen */}
            {formIndex == 2 && <Screen2 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}

            {/* Firm Name screen */}
            {formIndex == 3 && <Screen3 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}

            {/* Area of the firm screen */}
            {formIndex == 4 && <Screen4 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}

            {/* Firm type */}
            {formIndex == 5 && <Screen5 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}

            {/* Onwership of business premises */}
            {formIndex == 6 && <Screen6 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}

            {/* Category Type */}
            {formIndex == 7 && <Screen7 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}

            {/* Ward No */}
            {formIndex == 8 && <Screen8 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}

            {/* Premises owner details */}
            {formIndex == 9 && <Screen9 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}

        </>
    )
}

export default NewApplication;