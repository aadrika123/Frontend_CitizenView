//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ComplaintReopenImage
//    DESCRIPTION - Citizen gives image of complaint as a proof here
//////////////////////////////////////////////////////////////////////////////////////

import {RiArrowDropLeftFill} from 'react-icons/ri'
import {MdCameraEnhance} from 'react-icons/md'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ComplaintReopenImage(props) {

  //destructuring predefined colors to maintain uniform theme everywhere
  const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
  
  return (
      <>

    {/* Corner back button */}
    <div className='text-xs font-semibold px-2 mt-4 flex'>
                    <div className="flex-1"><span onClick={props.backFun} className='cursor-pointer border-b border-black'><RiArrowDropLeftFill className="inline text-xl" />Back</span></div>
                </div>
                
        {/* main */}
          <div className='p-2 md:p-10 flex justify-center items-center  overflow-hidden'>
              <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>
                  <div className="form-group md:mb-6 col-span-12 mt-6">

                    {/* input image */}
                      <div className="flex items-center mb-4">
                          <input id="option1" type="file" value="" name="residentialType" className="hidden" />
                          <label for="option1" className="ml-2 text-3xl font-medium text-gray-900 cursor-pointer border border-dashed border-zinc-200 bg-zinc-100 w-full h-[10rem] flex justify-center items-center rounded-md"><MdCameraEnhance/></label>
                      </div>
                      
                  </div>

                  {/* Buttons */}
                  <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-2">

                    {/* Back */}
                     <div className="col-span-6"> <button onClick={()=>props.backFun()} type="submit" className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Back</button></div>
                     
                     {/* Next */}
                     <div className="col-span-6"> <button onClick={()=>props.reopenNext()} type="submit" className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}>Next</button></div>
                     
                     <div className="col-span-12 my-4 text-center">
                          

                          {/* skip an continue button */}
                          <button
                            onClick={() => props.reopenNext()}
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

//////////////////////////////////////////////
// Export to : GreivancesComplaints.js
//////////////////////////////////////////////
