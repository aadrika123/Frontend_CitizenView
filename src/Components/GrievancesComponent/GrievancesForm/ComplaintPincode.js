//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ComplaintPincode
//    DESCRIPTION - Citizen give pin code 
//////////////////////////////////////////////////////////////////////////////////////

import { RiArrowDropLeftFill } from 'react-icons/ri'
import { useFormik } from 'formik'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ComplaintPincode(props) {


  // formik
  const formik = useFormik({
    initialValues: {
      complaintPincode : ''
    },

    onSubmit : (values) => {
      console.log("Complaint pincode => ", values)
      props.nextFun();
      props.postData(values);
    }
  })

    //destructuring predefined colors to maintain uniform theme everywhere
    const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
    return (
        <>

        {/* corner */}
        <div className="text-xs font-semibold px-2 mt-4 flex">

          {/* corner back button */}
          <div className="flex-1">
            <span onClick={props.backFun} className="border-b cursor-pointer border-black">
              <RiArrowDropLeftFill className="inline text-xl" />
              Back
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

            {/* sub heading */}
            <div className="col-span-12">
              
              <h1 className={` ${titleColor} opacity-70`}>
                Complaint's Location
              </h1>
            </div>

            {/* Heading */}
            <div className="col-span-12">
              
              <h1 className={`font-bold ${titleColor} text-2xl`}>
                Do you know the Complaint Pincode ?
              </h1>
            </div>

            {/* description */}
            <div className="col-span-12">
              
              <h1 className={` ${titleColor} text-xs opacity-40`}>
                If you know the complaintPincode of the complaint address, provide below. It will help up us identify complaint locaiton easily or you can skip and continue.
              </h1>
            </div>

            {/* input field */}
            <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Pincode</label>
                        <input name="complaintPincode" value={formik.values.complaintPincode} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" placeholder='Enter Pincode'
                             />

                    </div>
    
            {/* Buttons */}
            <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">
              
              {/* button button */}
              <div className="col-span-6">
                
                <button
                  onClick={() => props.backFun()}
                  className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
                >
                  Back
                </button>
              </div>

              {/* next button */}
              <div className="col-span-6">
                
                <button
                  type="submit"
                  className={`shadow-lg w-full px-6 py-4 ${nextButtonColor} text-white font-medium text-xs leading-tight  rounded  ${nextBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
                >
                  Next
                </button>
              </div>

              {/* skip and continue button */}
              <div className="col-span-12 my-4 text-center">
                
                <button
                  onClick = {() =>{ 
                    props.nextFun()
                  }}
                  type="submit"
                  className={`text-blue-400 hover:underline hover:text-blue-600`}
                >
                  Skip and Continue
                </button>
              </div>

            </div>
            </div>
          </form>
      </>
    )
}

export default ComplaintPincode

///////////////////////////////////////////////////////
// Export to : GrievancesCitizenEntryForm.js
///////////////////////////////////////////////////////