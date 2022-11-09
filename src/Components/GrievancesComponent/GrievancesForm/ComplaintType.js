//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Complaint Type
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import ComplaintSubType from "./ComplaintSubType";
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from "../../Styles/ThemeStyle";

function ComplaintType(props) {

  // navigation constants
  const navigate = useNavigate();

  // constant
  const [subType, setSubType] = useState('')


  // form validation
  const validationSchema = yup.object({
    complaintType: yup.string().required("select complaint type"),
    complaintSubType: yup.string().required("select complaint sub type"),
  });

  // formik
  const formik = useFormik({
    initialValues: {
      complaintType: "",
      complaintSubType: props.subType
    },

    onSubmit: (values) => {
      console.log("complaint type => ", values);
      props.nextFun();
      props.postData(values);
    },validationSchema
  });

  // getting complaint sub type function
  const getSubType = (data) => {
    console.log("Complaint sub type => ", data)
    setSubType(data)
  }

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

    {/* corner */}
      <div className="text-xs font-semibold px-2 mt-4 flex">

        {/* corner home button */}
        <div className="flex-1">
          <span
            onClick={() => navigate("/grievance-index")}
            className="border-b cursor-pointer border-black"
          >
            <RiArrowDropLeftFill className="inline text-xl" />
            Home
          </span>
        </div>

        {/* corner page count */}
        <div className="flex-1 text-right">
          <span className="">{props?.formIndex} of 6</span>
        </div>
      </div>

      {/* form */}
      <form onChange={formik.handleChange} onSubmit={formik.handleSubmit} className="p-2 md:p-10 flex justify-center items-center  overflow-hidden">
        <div className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}>

          {/* heading */}
          <div className="col-span-12">
            {" "}
            <h1 className={`font-bold ${titleColor} text-2xl`}>
              Select Complaint Type
            </h1>
          </div>

          {/* description */}
          <div className="col-span-12">
            {" "}
            <h1 className={` ${titleColor} text-xs opacity-40`}>
              Select the option related to your complaint from the list given
              below. If the complaint type you ar looking for is not listed
              select others.
            </h1>
          </div>

          {/* select box */}
          <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
          <select name='complaintType' value={formik.values.complaintType} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md">

          <option value='' disabled >--Select--</option>
          <option value='Garbage' >Garbage</option>
          <option value='Streetlights' >Streetlights</option>
          <option value='Drains' >Drains</option>
          <option value='Water & Sewage' >Water & Sewage</option>
          <option value='Roads & Footpaths' >Roads & Footpaths</option>
          <option value='Mosquitoes' >Mosquitoes</option>
          <option value='Animals' >Animals</option>
          <option value='Public Toilets' >Public Toilets</option>
          <option value='Land Violations' >Land Violations</option>
          <option value='Trees' >Trees</option>

            </select>

            {/* formik error viewing */}
            {formik.touched.complaintType && formik.errors.complaintType ? (<span className="text-sm text-red-600">{formik.errors.complaintType}</span>): null}
          
          </div>


            {/* complaint sub type */}
            {formik.values.complaintType != "" && <>
            
            <ComplaintSubType complaintType={formik.values.complaintType} complaintSubType={getSubType}/>

            {/* formik error viewing */}
            {formik.touched.complaintSubType && formik.errors.complaintSubType ? <span className="col-span-12 text-sm text-red-600">{formik.errors.complaintSubType}</span>: null }
            
            </>}

          {/* buttons */}
          <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">

            {/* back button */}
            <div className="col-span-6">
              {" "}
              <button
                onClick={() => navigate("/grievance-index")}
                className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
              >
                Back
              </button>
            </div>

            {/* Next button */}
            <div className="col-span-6">
              {" "}
              <button
                type="submit"
                className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ComplaintType;

///////////////////////////////////////////////////////
// Export to : GrievancesCitizenEntryForm.js
///////////////////////////////////////////////////////