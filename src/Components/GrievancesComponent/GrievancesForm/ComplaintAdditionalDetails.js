//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Complaint Addition Details
//    DESCRIPTION - Complaint Addition Details is single input component
//////////////////////////////////////////////////////////////////////////////////////

import { RiArrowDropLeftFill } from 'react-icons/ri'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'
import { useFormik } from 'formik'

function ComplaintAdditionalDetails(props) {

  // Formik
  const formik = useFormik({
    initialValues: {
      complaintAdditionalDetails: ""
    },

    onSubmit : (values) => {
      console.log("Complaint Addition Details => ", values)
      props.nextFun();
      props.postData(values);
    }
  })

    //destructuring predefined colors to maintain uniform theme everywhere
    const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()

    return (
        <>

    <div className="text-xs font-semibold px-2 mt-4 flex">
      
      {/* Back button */}
      <div className="flex-1">
        <span onClick={props.backFun} className="border-b cursor-pointer border-black">
          <RiArrowDropLeftFill className="inline text-xl" />
          Back
        </span>
      </div>

      {/* page count */}
      <div className="flex-1 text-right">
        <span className="">{props?.formIndex} of 7</span>
      </div>

    </div>

    {/* Form */}
    <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} className="p-2 md:p-10 flex justify-center items-center  overflow-hidden">
      <div
        className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}
      >

      {/* Title */}
        <div className="col-span-12">
          {" "}
          <h1 className={`font-bold ${titleColor} text-2xl`}>
            Provide Additional Details
          </h1>
        </div>

        {/* Description */}
        <div className="col-span-12">
          {" "}
          <h1 className={` ${titleColor} text-xs opacity-40`}>
            If you think apart from information provided till now additional details are required to resolve complaint, provide it below:
          </h1>
        </div>

      {/* Textarea */}
        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Additional Address Information</label>
                        <textarea name='complaintAdditionalDetails' value={formik.values.complaintAdditionalDetails} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                             />

                    </div>

        {/* Buttons */}
        <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">

          {/* Back */}
          <div className="col-span-6">
            {" "}
            <button
              onClick={() => props.backFun()}
              className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
            >
              Back
            </button>
          </div>

          {/* Submit */}
          <div className="col-span-6">
            {" "}
            <button
              type="submit"
              className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
            >
              Submit
            </button>
          </div>

        </div>
        </div>
      </form>

  </>
    )
}

export default ComplaintAdditionalDetails