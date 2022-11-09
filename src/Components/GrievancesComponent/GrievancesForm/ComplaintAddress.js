//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ComplaintAddress
//    DESCRIPTION - Citizen gives their address details
//////////////////////////////////////////////////////////////////////////////////////

import {RiArrowDropLeftFill} from 'react-icons/ri'
import { useFormik } from 'formik'
import * as yup from 'yup'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ComplaintAddress(props) {

  // form validation
  const validationSchema = yup.object({
      complaintCity : yup.string().required("select city"),
      complaintLocality: yup.string().required("select locality or mohalla"),
      complaintWardNo: yup.string().required("enter ward no."),
  })

  // Formik
  const formik = useFormik({
    initialValues: {
      complaintCity : '',
      complaintLocality: '',
      complaintWardNo: '',
      complaintHouseNo: ''
    },

    onSubmit : (values) => {
      console.log("Complaint address => ", values)
      props.nextFun();
      props.postData(values);
    }, validationSchema
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
        <span className="">{props?.formIndex} of 6</span>
      </div>

    </div>

    {/* Form */}
    <form onChange={formik.handleChange} onSubmit={formik.handleSubmit} className="p-2 md:p-10 flex justify-center items-center  overflow-hidden">
      <div
        className={`grid grid-cols-12 ${bgCardColor} shadow-lg w-full md:w-1/3 p-4 py-10 md:p-10`}
      >

        {/* Sub title */}
        <div className="col-span-12">
          {" "}
          <h1 className={` ${titleColor} opacity-70`}>
            Complaint's Location
          </h1>
        </div>

        {/* Title */}
        <div className="col-span-12">
          {" "}
          <h1 className={`font-bold ${titleColor} text-2xl`}>
            Provide Complaint address
          </h1>
        </div>

        {/* Description */}
        <div className="col-span-12">
          {" "}
          <h1 className={` ${titleColor} text-xs opacity-40`}>
            Choose the locality/mohalla of the complaint from the list given below.
          </h1>
        </div>

        {/* Select boxes */}
        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">

              {/* city select box */}
              <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">City<span className='text-red-500'>*</span></label>
              <select name='complaintCity' onChange={formik.handleChange} value={formik.values.complaintCity} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md">
                            <option value='' selected>--Select--</option>
                            <option value="City A">City A</option>
                            <option value="City B">City B</option>

                        </select>

                        {/* formik error view */}
                        {formik.touched.complaintCity && formik.errors.complaintCity ? (<span className="text-sm text-red-600">{formik.errors.complaintCity}</span>): null}

                    </div>

                    {/* Locality Select box */}
                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">

                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Locality/Mohalla<span className='text-red-500'>*</span></label>
                        <select name='complaintLocality' onChange={formik.handleChange} value={formik.values.complaintLocality} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                        >
                            <option value='' selected>--Select--</option>
                            <option value="Locality A">Locality A</option>
                            <option value="Locality B">Locality B</option>
                            {/* {
                                            props?.preFormData?.wardList?.map((data) => (
                                                <option value={data.id}>{data.name}</option>
                                            ))
                                        } */}

                        </select>

                        {/* formik error view */}
                        {formik.touched.complaintLocality && formik.errors.complaintLocality ? (<span className="text-sm text-red-600">{formik.errors.complaintLocality}</span>): null}

                    </div>

                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">

                      {/* Ward No. */}
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Ward No.<span className='text-red-500'>*</span></label>
                        <input name="complaintWardNo" value={formik.values.complaintWardNo} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" placeholder='Enter ward no.'
                             />

                      {/* formik error view */}
                      {formik.touched.complaintWardNo && formik.errors.complaintWardNo ? (<span className="text-sm text-red-600">{formik.errors.complaintWardNo}</span>): null}

                    </div>

                    <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">

                      {/* House No. */}
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">House No. <i> (optional) </i></label>
                        <input name="complaintHouseNo" value={formik.values.complaintHouseNo} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" placeholder='Enter house no.'
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

          {/* Next */}
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

export default ComplaintAddress

///////////////////////////////////////////////////////
// Export to : GrievancesCitizenEntryForm.js
///////////////////////////////////////////////////////