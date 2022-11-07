//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 03 November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Grievances Index Page
//////////////////////////////////////////////////////////////////////////////////////

import {RiArrowDropLeftFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Components/Styles/ThemeStyle'
import { useNavigate } from 'react-router-dom'

const GrievancesIndex = () => {

    const navigate = useNavigate()

// theme constants
    const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor } = ThemeStyle()

// css constant
    let iconColor = "text-amber-600 hover:text-gray-100";
    
    return (
        <>
        <div className='text-xs font-semibold pl-2 mt-4'><span onClick={()=>navigate('/')} className='border-b cursor-pointer border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
        <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
            <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10 gap-3 `}>

                {/* {******  TITLE *********} */}
                <div className="col-span-12 flex flex-row w-full justify-center text-lg ">
                    <h1 className={`font-semibold ${titleColor} `}>Grievance</h1>
                </div>

                {/* {******  FILE A COMPLAINT *********} */}

                <div className="col-span-12  w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                    <Link to='/grievance-citizen-form'>
                        <div className='flex flex-row'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${iconColor}`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>
                            </span>
                            <h1 className={`font-semibold ${titleColor}  ml-2 `}>File a Complaint</h1>
                        </div>
                    </Link>
                </div>

                {/* {******  MY COMPLAINTS *********} */}
                <div className="col-span-12  w-full bg-gray-50 p-4 shadow-md text-sm mx-auto ">
                    <Link to='/grievance-complaints'>
                        <div className='flex flex-row'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${iconColor}`}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                            <h1 className={`font-semibold ${titleColor}  ml-2 `}>My Complaints</h1>
                        </div>
                    </Link>
                </div>

              
            </div>
        </div>

             
         </>
  )
}

export default GrievancesIndex