//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Complaint File Success
//    DESCRIPTION - Complaint File Success is single input component
//////////////////////////////////////////////////////////////////////////////////////

import {AiTwotoneLike} from 'react-icons/ai'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { Navigate, useNavigate } from 'react-router-dom'

function ComplaintFileSuccess(props) {

    const navigate = useNavigate()

    //destructuring predefined colors to maintain uniform theme everywhere
    const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
    return (
        <>
    <div className="text-xs font-semibold px-2 mt-4 flex">
    </div>
    <div className="p-2 md:p-10 flex justify-center items-center  overflow-hidden">
      <div
        className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}
      >
        <div className="col-span-12 my-2">
          {" "}
          <div className='flex flex-col space-y-2 items-center border py-4 bg-green-800 rounded-sm shadow-md text-white'>
            <span className='font-bold text-3xl'>Complaint Submitted</span>
            <span className='border p-4 rounded-full bg-white text-green-800 text-3xl'><AiTwotoneLike/></span>
            <span className='font-semibold'>Complaint No.</span>
            <span className='font-semibold'>PG-PGR-2021-02-04-000553</span>
          </div>
        </div>
        <div className="col-span-12">
          {" "}
          <h1 className={` ${titleColor} opacity-70`}>
            The notification along with complaint number is sent to your registered mobile number. You can track the complaint status using mobile or web app.
          </h1>
        </div>


        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">

          <div className="col-span-12">
            {" "}
            <button
              onClick={() => navigate('/grievance-index')}
              type="submit"
              className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
            >
              Go back to home page
            </button>
          </div>

        </div>
      </div>
    </div>
  </>
    )
}

export default ComplaintFileSuccess