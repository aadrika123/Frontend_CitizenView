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

function ComplaintList(props) {
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

  const navigate = useNavigate()

  return (

    <>
      <div className="text-xs font-semibold px-2 mt-4 flex">
        <div className="flex-1">
          <span onClick={() => navigate('/grievance-index')} className="cursor-pointer border-b border-black">
            <RiArrowDropLeftFill className="inline text-xl" />
            Home
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
              My Complaints
            </h1>
          </div>
          
          <div onClick={() => {props.summary()}} className="col-span-12 bg-zinc-100 text-sm flex flex-col p-4 rounded-md shadow-sm hover:shadow-md mt-4 space-y-2 cursor-pointer hover:scale-105 hover:bg-zinc-200 transition-all duration-300 ease-in-out">
              <div>
              <span className={`font-bold ${titleColor} `}>
              Damage Garbage Bin
            </span>
            <span className="flex flex-wrap space-x-2 items-center space-y-1">
              <span><BsCalendarEvent/></span><span>4-Feb-2021</span>
            </span>
              </div>

              <div className="flex flex-col flex-wrap space-y-1">
              <span className={`font-bold ${titleColor} `}>
              Complaint No
            </span>
            <span>PG-PGR-2021-02-04-0005553</span>
            <span className="bg-red-100 w-max text-red-700 px-4 py-1.3 rounded-full shadow-sm">OPEN</span>
            <span>Pending for assignment</span>
              </div>

          </div>

          <div onClick={() => {props.summary()}} className="col-span-12 bg-zinc-100 text-sm flex flex-col p-4 rounded-md shadow-sm hover:shadow-md my-4 space-y-2 cursor-pointer hover:scale-105 hover:bg-zinc-200 transition-all duration-300 ease-in-out">
              <div>
              <span className={`font-bold ${titleColor} `}>
              Damage Garbage Bin
            </span>
            <span className="flex flex-wrap space-x-2 items-center space-y-1">
              <span><BsCalendarEvent/></span><span>4-Feb-2021</span>
            </span>
              </div>

              <div className="flex flex-col flex-wrap space-y-1">
              <span className={`font-bold ${titleColor} `}>
              Complaint No
            </span>
            <span>PG-PGR-2021-02-04-0005553</span>
            <span className="bg-green-100 shadow-sm w-max text-green-700 px-4 py-1.3 rounded-full">CLOSED</span>
            <span>Pending for assignment</span>
              </div>

          </div>
          
        </div>
      </div>
    </>
  );
}

export default ComplaintList;
