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
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from "../../Styles/ThemeStyle";

function Screen1(props) {
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

  return (

    <>
      <div className="text-xs font-semibold px-2 mt-4 flex">
        <div className="flex-1">
          <span onClick={props.backFun} className="border-b border-black">
            <RiArrowDropLeftFill className="inline text-xl" />
            Back
          </span>
        </div>
        <div className="flex-1 text-right">
          <span className="">{props?.formIndex} of 10</span>
        </div>
      </div>
      <div className="p-2 md:p-10 flex justify-center items-center  overflow-hidden">
        <div
          className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}
        >
          <div className="col-span-12">
            {" "}
            <h1 className={`font-bold ${titleColor} text-2xl`}>
              Select Complaint Type
            </h1>
          </div>
          <div className="col-span-12">
            {" "}
            <h1 className={` ${titleColor} text-xs opacity-40`}>
              Select the option related to your complaint from the list given below. If the complaint type you ar looking for is not listed select others.
            </h1>
          </div>
          <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
            <div className="flex items-center mb-4">
              <input
                id="option1"
                type="radio"
                value=""
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option1"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Garbage
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                checked
                id="option2"
                type="radio"
                value=""
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option2"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Streetlights
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                checked
                id="option3"
                type="radio"
                value=""
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option3"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Drains
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                checked
                id="option4"
                type="radio"
                value=""
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option4"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Water & Sewage
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                checked
                id="option5"
                type="radio"
                value=""
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option5"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Roads & Footpaths
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                checked
                id="option6"
                type="radio"
                value=""
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option6"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Mosquitoes
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                checked
                id="option7"
                type="radio"
                value=""
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option7"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Animals
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                checked
                id="option8"
                type="radio"
                value=""
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option8"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Public Toilets
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                checked
                id="option9"
                type="radio"
                value=""
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option9"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Land Violations
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                checked
                id="option10"
                type="radio"
                value=""
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option10"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Trees
              </label>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
            <div className="col-span-6">
              {" "}
              <button
                onClick={() => props.backFun()}
                type="submit"
                className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
              >
                Back
              </button>
            </div>
            <div className="col-span-6">
              {" "}
              <button
                onClick={() => props.nextFun()}
                type="submit"
                className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen1;
