//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.
//    Revision - 1
//    Project - JUIDCO
//    Component  - Complaint Summary
//////////////////////////////////////////////////////////////////////////////////////

import {RiArrowDropLeftFill} from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import ComplaintTimeline from './ComplaintTimeline'
import apiLinks from "../Api/GrievanceApi"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {GlobalData} from '../Context/contextVar'
import { useContext } from 'react';
import {useQuery} from 'react-query'
import {Puff} from 'react-loader-spinner'

function ComplaintSummary(props) {

  const {getId} = useContext(GlobalData)

  const {listComplaint} = apiLinks()

  const [complaintData, setComplaintData] = useState([])
  const [status, setStatus] = useState(true)

  console.log("userId => ", getId)

  const {isLoading, data, error} = useQuery("getComplaintData", async () => {
    try {
      const data = await axios.get(listComplaint + "/" + getId);
      console.log("getting complaint data => ", data)
      setComplaintData(data.data)
      return data;
    }
    catch (error) {
      throw Error("Unable to get complaint data", error);
    }
  })


  useEffect(() => {
    complaintData.complaintStatus == 'Closed' ? setStatus(true) : setStatus(false)
  }, [complaintData])


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
        {!isLoading ? <div className="col-span-12 bg-zinc-100 rounded-md p-4 mt-4 shadow-md">
          
          <h1 className={` ${titleColor} font-bold col-span-12 pb-2`}>
            {complaintData?.complaintSubType}
          </h1>

          <div className="col-span-12 w-full flex flex-wrap mb-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800 w-1/2 ">Complaint No.</div>
            <div className="col-span-6 text-sm w-1/2 ">{complaintData?.complaintNo}</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Application Status</div>
            <div className="col-span-6 text-sm w-1/2 ">{complaintData?.complaintApplicationStatus}</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Complaint Type</div>
            <div className="col-span-6 text-sm w-1/2 ">{complaintData?.complaintType}</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Complaint Sub-Type</div>
            <div className="col-span-6 text-sm w-1/2 ">{complaintData?.complaintSubType}</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Additional Details</div>
            <div className="col-span-6 text-sm w-1/2 ">{complaintData?.complaintAdditionalDetails}</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
          <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Filed Date</div>
            <div className="col-span-6 text-sm w-1/2 ">{complaintData?.complaintFiledDate}</div>
          </div>
          <hr />
          <div className="col-span-12 w-full flex flex-wrap my-1">
            <div className="col-span-6 text-sm font-bold text-zinc-800  w-1/2 ">Address</div>
            <div className="col-span-6 text-sm w-1/2 ">{complaintData?.complaintLocality}{" "}{complaintData?.complaintLandmark}{" "}{complaintData?.complaintCity}{" "}{complaintData?.complaintPincode}</div>
          </div>

        </div> 
        :
         <Puff
  height="80"
  width="80"
  radisu={1}
  color="#B45309"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/> }

       <ComplaintTimeline rate={props.rate} reopen={props.reopen} status={status}/>

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