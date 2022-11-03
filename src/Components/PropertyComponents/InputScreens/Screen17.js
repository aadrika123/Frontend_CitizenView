//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Kumar Singh
//    Version - 1.0
//    Date - 03 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen17
//    DESCRIPTION - Scrren7 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from 'react-icons/ai'
import { RiArrowDropLeftFill } from 'react-icons/ri'
import { FcOk } from 'react-icons/fc'
import { BiEdit } from 'react-icons/bi'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function Screen17(props) {
    //destructuring predefined colors to maintain uniform theme everywhere
    const { bgHeaderColor, titleColor, nextButtonColor, nextBtnHoverColor, backButtonColor, backBtnHoverColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()
    return (
        <>
            <div className='text-xs font-semibold px-2 mt-4 flex'>
                <div className="flex-1"><span onClick={props.backFun} className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                <div className="flex-1 text-right"><span className=''>{props?.formIndex} of 10</span></div>
            </div>

            <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
                <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                    <div className='col-span-12 bg-green-400 text-center py-5 border shadow-md'>
                        <p className='font-bold text-2xl  '>Application Submitted</p>
                        <p className='flex justify-center my-2'><FcOk fill='blue' className='bg-white rounded-full' size={35} /></p>
                        <p className='mt-2 font-semibold'>Application No :</p>
                        <p className='font-bold text-2xl'>JH-6767GHG-AXTR</p>
                    </div>

                    {/* <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl text-center`}>Application Submitted</h1></div> */}
                    <div className="col-span-12"> <h1 className={` ${titleColor} text-sm mt-2 opacity-40`}>If you want to modify any value, click on change in the respected step. It will redirect you to the concerned step where you can make your changes.</h1>
                        <div className='text-center mt-1'><span className='font-semibold'>Unique Property ID : </span>JH-6767GHG-AXTR</div>
                        <div className='flex justify-center my-2'> <button className='bg-amber-600 px-3 py-1 text-white font-semibold'>Download Acknowledgement Form</button></div>
                        <div className='flex justify-center my-2'> <button className='bg-blue-400 px-3 py-1 font-semibold'>Goto Home</button></div>
                    </div>


                    {/* <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
                        <div className="col-span-6"> <button onClick={() => props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                        <div className="col-span-6"> <button onClick={() => props.nextFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Submit</button></div>
                    </div> */}

                </div>

            </div>
        </>
    )
}

export default Screen17
