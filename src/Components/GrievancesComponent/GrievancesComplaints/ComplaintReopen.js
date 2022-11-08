//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Screen 6
//    DESCRIPTION - Screen 6 is single input component
//////////////////////////////////////////////////////////////////////////////////////

import {AiFillInfoCircle} from 'react-icons/ai'
import {RiArrowDropLeftFill} from 'react-icons/ri'
import {MdCameraEnhance} from 'react-icons/md'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useFormik } from 'formik'
import * as yup from 'yup'

function ComplaintReopen(props) {

  const validationSchema = yup.object({
    complaintReason: yup.string().required("select reason")
  })

  const formik = useFormik({
    initialValues: {
      complaintReason: ""
    },

    onSubmit: (values) => {
      console.log("complaint reason => ", values)
      props.reopenNext(values)
    },validationSchema

  })

  //destructuring predefined colors to maintain uniform theme everywhere
  const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
  return (
    <>
    <div className="text-xs font-semibold px-2 mt-4 flex">
      <div className="flex-1">
        <span onClick={props.backFun} className="cursor-pointer border-b border-black">
          <RiArrowDropLeftFill className="inline text-xl" />
          Back
        </span>
      </div>
    </div>

    <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} className="p-2 md:p-10 flex justify-center items-center  overflow-hidden">
      <div
        className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}
      >
        <div className="col-span-12">
          {" "}
          <h1 className={`font-bold ${titleColor} text-2xl`}>
            Choose Reason to Re-open the Complaint
          </h1>
        </div>
        <div className="col-span-12">
          {" "}
          <h1 className={` ${titleColor} text-xs opacity-40`}>
            The complaint type you have chosen has following complaint sub-types. Select the option of your choice form the list given below.
          </h1>
        </div>
        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
          <div className="flex items-center mb-4">
            <input
              id="option1"
              type="radio"
              value="No work was done"
              name="complaintReason"
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="option1"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              No work was done
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="option2"
              type="radio"
              value="Only partial work was done"
              name="complaintReason"
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="option2"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              Only partial work was done
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="option3"
              type="radio"
              value="Employee did not turn up"
              name="complaintReason"
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="option3"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              Employee did not turn up
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="option4"
              type="radio"
              value="No permanent solution"
              name="complaintReason"
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="option4"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              No permanent solution
            </label>
            </div>
            {formik.touched.complaintReason && formik.errors.complaintReason ? (<span className="text-sm text-red-600">{formik.errors.complaintReason}</span>): null}
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
          <div className="col-span-6">
            {" "}
            <button
              onClick={() => props.backFun()}
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
  )
}

export default ComplaintReopen
