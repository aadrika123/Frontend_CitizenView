
import { useEffect, useState } from 'react'
import Screen10 from '../../../Components/TradeComponents/InputScreens/Screen10'
import Screen9 from '../../../Components/TradeComponents/InputScreens/Screen9'
import Screen1 from '../../../Components/TradeComponents/InputScreens/Screen1'
import Screen2 from '../../../Components/TradeComponents/InputScreens/Screen2'
import Screen3 from '../../../Components/TradeComponents/InputScreens/Screen3'
import Screen4 from '../../../Components/TradeComponents/InputScreens/Screen4'
import Screen5 from '../../../Components/TradeComponents/InputScreens/Screen5'
import Screen6 from '../../../Components/TradeComponents/InputScreens/Screen6'
import Screen7 from '../../../Components/TradeComponents/InputScreens/Screen7'
import Screen8 from '../../../Components/TradeComponents/InputScreens/Screen8'
import Screen11 from '../../../Components/TradeComponents/InputScreens/Screen11'
import Screen12 from '../../../Components/TradeComponents/InputScreens/Screen12'
import Screen13 from '../../../Components/TradeComponents/InputScreens/Screen13'
import Screen14 from '../../../Components/TradeComponents/InputScreens/Screen14'


function NewApplication() {

    const [allFormData, setallFormData] = useState([])

    //formIndex variable to hold number of screen to show in form
    const [formIndex, setFormIndex] = useState(1)

    //backward 1 step from currentIndex
    const backFun = () => setFormIndex(prev => prev - 1)

    //forward 1 step from currentIndex
    const nextFun = () => setFormIndex(prev => prev + 1)

    console.log('form index', formIndex)

    const handleAllFormData = (key, formData) => {
        console.log("====previous form data======= :", formData);
        setallFormData({ ...allFormData, [key]: formData });

        console.log("====all form data======= :", formData);

    }

    return (
        <>
            {/* Information Screen */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 1 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen1 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>

            {/* Apply With Screen */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 2 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen2 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>
            {/* {formIndex == 2 && <Screen2 nextFun={nextFun} backFun={backFun} formIndex={formIndex} />} */}

            {/* Firm Name screen */}

            <div className={`w-full absolute top-10 transition-all ${formIndex == 3 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen3 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>

            {/* Area of the firm screen */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 4 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen4 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>

            {/* Firm type */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 5 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen5 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>


            {/* Onwership of business premises */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 6 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen6 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>

            {/* Category Type */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 7 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen7 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>


            {/* Ward No */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 8 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen8 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>

            {/* Premises owner details */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 9 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen9 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>


            {/* Business Description */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 10 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen10 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>


            {/* Nature Of business */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 11 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen11 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>


            {/* Owner Details */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 12 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen12 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>


            {/* License For Details */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 13 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen13 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>

            {/* Success Screen */}
            <div className={`w-full absolute top-10 transition-all ${formIndex == 14 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen14 nextFun={nextFun} backFun={backFun} formIndex={formIndex} /></div>

        </>
    )
}

export default NewApplication;