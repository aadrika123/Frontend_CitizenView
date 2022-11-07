//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Greivances Screen 1
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from "react-icons/ai";
import { RiArrowDropLeftFill } from "react-icons/ri";
import {BsCalendarEvent} from 'react-icons/bs'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from "../../Styles/ThemeStyle";
import { useNavigate } from "react-router-dom";
// Importing api links
import apiLinks from "../Api/GrievanceApi"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {GlobalData} from '../Context/contextVar'
import { useContext } from 'react';

function ComplaintList(props) {

  const {listComplaint} = apiLinks()

  const {postId} = useContext(GlobalData)

  const [complaintData, setComplaintData] = useState([])

  // axios
  useEffect(() => {
    axios.get(listComplaint)
    .then((res) => {
      setComplaintData(res.data)
      console.log("Getting Complaint List => ", res.data)
    })
    .catch((err) => console.log("Getting Complaint List Error => ", err))
  },[])

  //destructuring predefined colors to maintain uniform theme everywhere
  const {
    bgHeaderColor,
    titleColor,
    nextButtonColor,
    nextBtnHoverColor,
    backButtonColor,
    backBtnHoverColor,
    bgCardColor,
    bgInfoColor,
    infoTextColor,
  } = ThemeStyle();

  // navigate constant
  const navigate = useNavigate()

  return (

    <>
      <div className="text-xs font-semibold px-2 mt-4 flex">
        <div className="flex-1">

          {/* Home Link */}
          <span onClick={() => navigate('/grievance-index')} className="cursor-pointer border-b border-black">
            <RiArrowDropLeftFill className="inline text-xl" />
            Home
          </span>
        </div>
      </div>

    {/* List of complaints */}
      <div className="p-2 md:p-10 flex justify-center items-center  overflow-hidden">
        <div
          className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}
        >
          <div className="col-span-12">
            {" "}
            
            {/* Heading */}
            <h1 className={`font-bold ${titleColor} text-2xl`}>
              My Complaints
            </h1>
          </div>

          {
            complaintData.map((elem) => <>
              <div onClick={() => {
                props.summary()
                postId(elem.id)
                }} className="col-span-12 bg-zinc-100 text-sm flex flex-col p-4 rounded-md shadow-sm hover:shadow-md mt-4 space-y-2 cursor-pointer hover:scale-105 hover:bg-zinc-200 transition-all duration-300 ease-in-out">
              <div>
              <span className={`font-bold ${titleColor} `}>
              {elem.complaintSubType}
            </span>
            <span className="flex flex-wrap space-x-2 items-center space-y-1">
              <span><BsCalendarEvent/></span><span>{elem.complaintFiledDate}</span>
            </span>
              </div>

              <div className="flex flex-col flex-wrap space-y-1">
              <span className={`font-bold ${titleColor} `}>
              Complaint No
            </span>
            <span>{elem.complaintNo}</span>
            <span className={(elem.complaintStatus == 'Open') ?`bg-red-100 w-max text-red-700 px-4 py-1.3 rounded-full shadow-sm uppercase`:`bg-green-100 w-max text-green-700 px-4 py-1.3 rounded-full shadow-sm uppercase`}>{elem.complaintStatus}</span>
            <span>{elem.complaintApplicationStatus}</span>
              </div>

          </div>

            </>)
          }
          
          
        </div>
      </div>
    </>
  );
}

export default ComplaintList;
