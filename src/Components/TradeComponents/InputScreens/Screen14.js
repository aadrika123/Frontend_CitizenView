//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen8
//    DESCRIPTION - Scrren7 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle';
import Multiselect from 'multiselect-react-dropdown';
import CommonStyles from '../../IndividualRoutes/CommonStyles';
import Info from '../../Common/Info';
import { useState } from 'react';

function Screen14(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle();
    const { labelStyle, inputStyle } = CommonStyles();
    const [tocStatusToggle, settocStatusToggle] = useState(false);

    const handleChange = () => {

    }

    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>
            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                    <div className="col-span-12"> <h1 className={`font-bold text-green-500 text-2xl`}>Congratulations</h1></div>
                    {/* <div className="col-span-12"> <h1 className={` ${titleColor} text-sm opacity-40`}>Enter Number of years you require a license For.</h1></div> */}

                    <div className="form-group mb-2 md:mb-6 col-span-12">
                        <label className="form-label inline-block mb-1 text-amber-600 text-sm font-bold">Your Application is Successfull !<span className='text-red-500'>*</span></label>
                        <img src="https://cdn-icons-png.flaticon.com/512/3083/3083650.png" alt="" className='' />
                        <div className="">

                        </div>
                        <label className="form-label inline-block mb-1 text-amber-600 text-sm font-bold my-4">Your Application Number is !  <span className='text-green-500'> APN123456789</span></label>
                    </div>



                    {/* <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                        <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                        <div className="col-span-6"> <button onClick={() => props.nextFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                    </div> */}
                </div>

            </div>

            {/* <Info infoText="In Case of tobacco the license can be taken only for a year !" /> */}
        </>
    )
}

export default Screen14
