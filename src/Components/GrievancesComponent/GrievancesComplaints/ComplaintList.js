//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Complaint list
//    Description - Citizen can view list of their filed complaint
//////////////////////////////////////////////////////////////////////////////////////

import { RiArrowDropLeftFill } from "react-icons/ri";
import {BsCalendarEvent} from 'react-icons/bs'

//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from "../../Styles/ThemeStyle";

import { useNavigate } from "react-router-dom";

// Importing api links
import apiLinks from "../Api/GrievanceApi"
import axios from "axios";
import { useState } from "react";

// importing global data constant
import {GlobalData} from '../Context/contextVar'

import { useContext } from 'react';
import {useQuery} from 'react-query'
import {Puff} from 'react-loader-spinner'

function ComplaintList(props) {

  // Destructing api constants
  const {listComplaint} = apiLinks()

  // calling context variable
  const {postId} = useContext(GlobalData)

  // getting api using axios and handling through useQuery
  const {isLoading, data, error} = useQuery("getData", () => {
    try {
      const data = axios.get(listComplaint);
      console.log("getting complaint list => ", data)
      return data;
    }
    catch (error) {
      throw Error("Unable to get complaint list data", error);
    }
  })


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
            
            
            {/* Heading */}
            <h1 className={`font-bold ${titleColor} text-2xl`}>
              My Complaints
            </h1>
          </div>

          { !isLoading ?  

            // mapping
            data.data.data.map((elem) => 
            
            <>

            {/* Complaint list */}
              <div onClick={() => {
                props.summary(elem?.complaintStatus)
                postId(elem?.id)
                }} className="col-span-12 bg-zinc-100 text-sm flex flex-col p-4 rounded-md shadow-sm hover:shadow-md mt-4 space-y-2 cursor-pointer hover:scale-105 hover:bg-zinc-200 transition-all duration-300 ease-in-out">
              <div>
              <span className={`font-bold ${titleColor} `}>
              {elem?.complaintSubType}
            </span>
            <span><img src={elem?.complaintImage} alt="" srcset="" /></span>
            <span className="flex flex-wrap space-x-2 items-center space-y-1">
              <span><BsCalendarEvent/></span><span>{elem?.complaintDate}</span>
            </span>
              </div>

              <div className="flex flex-col flex-wrap space-y-1">
              <span className={`font-bold ${titleColor} `}>
              Complaint No
            </span>
            <span>{elem?.complaintNo}</span>
            {(elem?.complaintStatus) ? <span className= 'bg-red-100 w-max text-red-700 px-4 py-1.3 rounded-full shadow-sm uppercase'>Open</span>: <span className='bg-green-100 w-max text-green-700 px-4 py-1.3 rounded-full shadow-sm uppercase'>Closed</span>}
            <span>{elem?.complaintApplicationStatus}</span>
              </div>

          </div>

            </>) 

            :

            // Loader
            <Puff
              height="80"
              width="80"
              radisu={1}
              color="#B45309"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /> 
          }
          
          
        </div>
      </div>
    </>
  );
}

export default ComplaintList;

///////////////////////////////////////////////////
// Export to : GrievancesComplaints.js
///////////////////////////////////////////////////