//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Complaint Type
//////////////////////////////////////////////////////////////////////////////////////

import { AiFillInfoCircle } from "react-icons/ai";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from "../../Styles/ThemeStyle";
import { useFormik } from "formik";
import * as yup from "yup";

function ComplaintType(props) {
  const validationSchema = yup.object({
    complaintType: yup.string().required("enter type"),
  });

  const formik = useFormik({
    initialValues: {
      complaintType: "",
    },

    onSubmit: (values) => {
      console.log("complaint type => ", values);
      props.nextFun();
      props.postData(values);
    },
  });

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

  const navigate = useNavigate();

  return (
    <>
      <div className="text-xs font-semibold px-2 mt-4 flex">
        <div className="flex-1">
          <span
            onClick={() => navigate("/grievance-index")}
            className="border-b cursor-pointer border-black"
          >
            <RiArrowDropLeftFill className="inline text-xl" />
            Home
          </span>
        </div>
        <div className="flex-1 text-right">
          <span className="">{props?.formIndex} of 7</span>
        </div>
      </div>

      <form
        onChange={formik.handleChange}
        onSubmit={formik.handleSubmit}
        className="p-2 md:p-10 flex justify-center items-center  overflow-hidden"
      >
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
              Select the option related to your complaint from the list given
              below. If the complaint type you ar looking for is not listed
              select others.
            </h1>
          </div>
          <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
            <div className="flex items-center mb-4">
              <input
                id="option1"
                type="radio"
                value="Garbage"
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="option1"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Garbage
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option2"
                type="radio"
                value="Streetlights"
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="option2"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Streetlights
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option3"
                type="radio"
                value="Drains"
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="option3"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Drains
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option4"
                type="radio"
                value="Water & Sewage"
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="option4"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Water & Sewage
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option5"
                type="radio"
                value="Roads & Footpaths"
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="option5"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Roads & Footpaths
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option6"
                type="radio"
                value="Mosquitoes"
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="option6"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Mosquitoes
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option7"
                type="radio"
                value="Animals"
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="option7"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Animals
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option8"
                type="radio"
                value="Public Toilets"
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="option8"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Public Toilets
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option9"
                type="radio"
                value="Land Violations"
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="option9"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Land Violations
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option10"
                type="radio"
                value="Trees"
                name="complaintType"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="option10"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Trees
              </label>
            </div>
            {formik.touched.complaintType && formik.errors.complaintType ? (
              <span>{formik.errors.complaintType}</span>
            ) : null}
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
            <div className="col-span-6">
              {" "}
              <button
                onClick={() => navigate("/grievance-index")}
                className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
              >
                Back
              </button>
            </div>

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
