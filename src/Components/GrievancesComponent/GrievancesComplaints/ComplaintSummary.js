//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.
//    Revision - 1
//    Project - JUIDCO
//    Component  - Complaint Summary
//////////////////////////////////////////////////////////////////////////////////////

import {AiFillInfoCircle} from 'react-icons/ai'
import {RiArrowDropLeftFill} from 'react-icons/ri'
import Info from '../../Common/Info'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import ComplaintTimeline from './ComplaintTimeline'

function ComplaintSummary(props) {
  //destructuring predefined colors to maintain uniform theme everywhere
  const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
  return (
    <>
    <div className="text-xs font-semibold px-2 mt-4 flex">
      <div className="flex-1">
        <span onClick={props.backFun} className=" cursor-pointer border-b border-black">
          <RiArrowDropLeftFill className="inline text-xl" />
          Back
        </span>
      </div>
    </div>
    <div className="p-2 md:p-10 flex justify-center items-center  overflow-hidden">
      <div
        className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}
      >
        <div className="col-span-12">
          {" "}
          <h1 className={`font-bold ${titleColor} text-2xl`}>
            Complaint Summary
          </h1>
        </div>

        {/* summary */}
        <div className="col-span-12 bg-zinc-100 rounded-md p-4 mt-4 shadow-md">
          
          <h1 className={` ${titleColor} font-bold col-span-12 pb-2`}>
            Damaged Garbage Bin
          </h1>

          <div className="col-span-12 w-full flex flex-wrap mb-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800 w-1/2 ">Complaint No.</div>
            <div className="col-span-6 text-sm w-1/2 ">PG-PGR-2021-02-04-0005553</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Application Status</div>
            <div className="col-span-6 text-sm w-1/2 ">Pending for assignment</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Complaint Type</div>
            <div className="col-span-6 text-sm w-1/2 ">Garbage</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Complaint Sub-Type</div>
            <div className="col-span-6 text-sm w-1/2 ">Damage Garbage Bin</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Additional Details</div>
            <div className="col-span-6 text-sm w-1/2 "></div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm w-1/2 ">4-Feb-2021</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Address</div>
            <div className="col-span-6 text-sm w-1/2 ">Main Road Abadpura City A</div>
          </div>



        </div>

       <ComplaintTimeline rate={props.rate} reopen={props.reopen}/>

        {/* Comments */}
        <div className="col-span-12 bg-zinc-100 rounded-md p-4 mt-4 shadow-md mb-4">
        <div className="form-group col-span-12">
                        <label className="form-label inline-block mb-1 font-semibold">Comments</label>
                        <textarea type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                             />

                    </div>
        </div>

          <div className="col-span-6">
            {" "}
            <button
              type="submit"
              className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
            >
              Send
            </button>
          </div>
        </div>
      </div>
  
  </>
  )
}

export default ComplaintSummary