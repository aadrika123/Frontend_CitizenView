//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ComplaintReopenImage
//    DESCRIPTION - ComplaintReopenImage is single input component
//////////////////////////////////////////////////////////////////////////////////////

import {AiFillInfoCircle} from 'react-icons/ai'
import {RiArrowDropLeftFill} from 'react-icons/ri'
import {MdCameraEnhance} from 'react-icons/md'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ComplaintReopenImage
(props) {
  //destructuring predefined colors to maintain uniform theme everywhere
  const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
  return (
      <>
        
          <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
              <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                  <div className="col-span-12"> <h1 className={`font-bold ${titleColor} text-2xl`}>Upload Complaint Photos</h1></div>
                  <div className="col-span-12"> <h1 className={` ${titleColor} text-xs opacity-40`}>Click on the icon below to upload the complaint photos as evidence. You can capture photos directly through your camera or upload from your Gallery. If you do not have complaint photo, you can skip and continue for next step.</h1></div>
                  <div className="form-group md:mb-6 col-span-12 mt-6">
                      <div className="flex items-center mb-4">
                          <input id="option1" type="file" value="" name="residentialType" className="hidden" />
                          <label for="option1" className="ml-2 text-3xl font-medium text-gray-900 cursor-pointer border border-dashed border-zinc-200 bg-zinc-100 w-full h-[10rem] flex justify-center items-center rounded-md"><MdCameraEnhance/></label>
                      </div>
                      
                  </div>

                  <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-2">
                     <div className="col-span-6"> <button onClick={()=>props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                     <div className="col-span-6"> <button onClick={()=>props.nextFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                     <div className="col-span-12 my-4 text-center">
                {" "}
                <button
                  onClick={() => props.nextFun()}
                  type="submit"
                  className={`text-blue-400 hover:underline hover:text-blue-600`}
                >
                  Skip and Continue
                </button>
              </div>
                  </div>
              </div>

          </div>
      </>
  )
}

export default ComplaintReopenImage
