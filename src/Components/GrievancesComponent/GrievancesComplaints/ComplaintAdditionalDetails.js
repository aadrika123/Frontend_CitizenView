//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ComplaintAdditionalDetails
//    DESCRIPTION - Citizen add their additional details
//////////////////////////////////////////////////////////////////////////////////////

import { RiArrowDropLeftFill } from 'react-icons/ri'
import { useFormik } from 'formik'
import * as yup from 'yup'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ComplaintAdditionalDetails(props) {

  // form validation
  const validationSchema = yup.object({
    complaintAdditionalDetails: yup.string().required("enter additional details")
  })

  // formik
  const formik = useFormik({
    initialValues: {
      complaintAdditionalDetails: ""
    }, 

    onSubmit: (values) => {
      console.log("Reopen Additional Details => ", values)
      props.reopenSuccess(values)
    }, validationSchema
  })

    //destructuring predefined colors to maintain uniform theme everywhere
    const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
    return (
        <>

        {/* corner back button */}
    <div className="text-xs font-semibold px-2 mt-4 flex">
      <div className="flex-1">
        <span onClick={props.backFun} className="border-b cursor-pointer border-black">
          <RiArrowDropLeftFill className="inline text-xl" />
          Back
        </span>
      </div>
    </div>

      {/* form */}
    <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} className="p-2 md:p-10 flex justify-center items-center  overflow-hidden">
      <div
        className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}
      >

        <div className="col-span-12">
          {" "}

          {/* Heading */}
          <h1 className={`font-bold ${titleColor} text-2xl`}>
            Complaint Description
          </h1>
        </div>
        <div className="col-span-12">
          {" "}

          {/* description */}
          <h1 className={` ${titleColor} text-xs opacity-40`}>
           If you think apart from information provided till now complaint description are required to resolve complaint, provide it below :
          </h1>
        </div>

        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">

          {/* input text area */}
          <textarea name='complaintAdditionalDetails' type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" placeholder='Write brief description about your complaint...' rows={3} />

          {/* formik error view */}
          {formik.touched.complaintAdditionalDetails && formik.errors.complaintAdditionalDetails ? (<span className="text-sm text-red-600">{formik.errors.complaintAdditionalDetails}</span>): null}

                    </div>

      {/* buttons */}
        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
          <div className="col-span-6">
            {" "}

            {/* back button */}
            <button
              onClick={() => props.backFun()}
              className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
            >
              Back
            </button>
          </div>
          <div className="col-span-6">
            {" "}

            {/* next button for submit */}
            <button
              type="submit"
              className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
            >
              Reopen Complaint
            </button>
          </div>
        </div>
      </div>
    </form>
  </>
    )
}

export default ComplaintAdditionalDetails

////////////////////////////////////////////////////////
// Export to : GrievancesComplaints.js
////////////////////////////////////////////////////////