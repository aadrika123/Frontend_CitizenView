//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 03 November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Grievances Index Page
//////////////////////////////////////////////////////////////////////////////////////

import {AiFillInfoCircle} from 'react-icons/ai'
import {RiArrowDropLeftFill} from 'react-icons/ri'
import {SlArrowRight} from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Components/Styles/ThemeStyle'

const GrievancesIndex = () => {

    const navigate = useNavigate()

 //destructuring predefined colors to maintain uniform theme everywhere
 const {bgHeaderColor,titleColor,nextButtonColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
 return (
     <>
        <div className='text-xs font-semibold pl-2 mt-4'><span className='border-b border-black'><RiArrowDropLeftFill className="inline text-xl"/>Back</span></div>
         <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
             <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 md:p-10`}>
                 <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Complaints</h1></div>
                 <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                     <div className="flex items-center mb-4">
                        <span><SlArrowRight/></span>
                        <span className={`text-zinc-800 cursor-pointer hover:bg-amber-300 px-4 rounded-md py-1.3 transition-all duration-300 ease-in-out`} onClick={() => navigate('/grievances-citizen-form')}>File a Complaint</span>
                     </div>
                     <div className="flex items-center mb-4">
                        <span><SlArrowRight/></span>
                        <span className={`text-zinc-800 cursor-pointer hover:bg-amber-300 px-4 rounded-md py-1.3 transition-all duration-300 ease-in-out`} onClick={() => navigate('/grievances-complaints')}>My Complaints</span>
                     </div>
                 </div>

                </div>
                </div>
             
         </>
  )
}

export default GrievancesIndex