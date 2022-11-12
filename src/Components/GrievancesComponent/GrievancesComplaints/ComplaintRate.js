//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ComplaintRate
//    Description - Citizen gives feedback and rating here
//////////////////////////////////////////////////////////////////////////////////////

import { RiArrowDropLeftFill } from 'react-icons/ri'
import StarsRating from 'stars-rating'
import { useState } from 'react'
import { useFormik } from 'formik'
import apiLinks from "../../GrievancesComponent/Api/GrievanceApi"
import axios from 'axios'
import * as yup from 'yup'
import {GlobalData} from '../Context/contextVar'
import { useContext } from 'react';
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'


function ComplaintRate(props) {

  const {getId} = useContext(GlobalData)

  // Validation form
  const validationSchema = yup.object({
      complaintRate: yup.number().moreThan(0).required()
  })

  // Destructing api
  const {rateComplaint} = apiLinks()

  // formik
  const formik = useFormik({
    initialValues:{
      complaintRate: '',
      complaintRemark: '',
      complaintComment: ""
    },

    onSubmit: (values) => {
      console.log("values => ", values)
      
      // calling submit function
      funSubmit(values)

    }, validationSchema

  })

  // submit function
  const funSubmit = (values) => {
    axios.post(rateComplaint+"/"+getId, values)
    .then((res) => {
      props.submitRate()
      console.log("success rated...")
    })
    .catch((err) => console.log(err))
  }

  // star rating constant
  const[rateValue, setRateValue] = useState(0)

  // handle star rating
  const ratingChanged = (newRating) => {
    console.log(newRating)
    setRateValue(newRating)
  }

    //destructuring predefined colors to maintain uniform theme everywhere
    const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
    return (
        
      <>

      {/* Corner back button */}
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

          {/* star rating */}
          <div className="col-span-12">
            
            <h1 className={`font-bold ${titleColor} text-2xl`}>
              How would you rate your experience with us ?
            </h1>
          </div>
          <div className="col-span-12 flex items-center space-x-8">
            
            <div>
            <StarsRating
  count={5}
  onChange={ratingChanged}
  size={50}
  color2={'#ffd700'} 
  color1= {'#cccccc'}
  name="complaintRate"
  edit={true} 
  value={formik.values.complaintRate = rateValue}/>
            </div>
  <div className='text-xl font-bold bg-yellow-400 px-4 py-1 mt-2 shadow-md rounded-md'>
    {formik.values.complaintRate}
  </div>
          </div>

          {/* Remark feedback */}
          <div className="col-span-12">
            
            <h1 className={` ${titleColor} font-bold`}>
             What was good ?
            </h1>
          </div>

          {/* Checkbox */}
          <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
            <div className="flex items-center mb-4">
              <input
                id="option1"
                type="checkbox"
                value="Services"
                name="complaintRemark"
                className="w-6 h-6 text-blue-600 cursor-pointer bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option1"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Services
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option2"
                type="checkbox"
                value="Resolution Time"
                name="complaintRemark"
                className="w-6 h-6 text-blue-600 cursor-pointer bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option2"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Resolution Time
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option3"
                type="checkbox"
                value="Quality of Work"
                name="complaintRemark"
                className="w-6 h-6 text-blue-600 cursor-pointer bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option3"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Quality of Work
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option4"
                type="checkbox"
                value="Others"
                name="complaintRemark"
                className="w-6 h-6 text-blue-600 cursor-pointer bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="option4"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Others
              </label>
              </div>
          </div>

           {/* Comments */}
        <div className="form-group col-span-12">
                        <label className="form-label inline-block mb-1 font-semibold">Comments</label>
                        <textarea name='complaintComment' value={formik.values.complaintComment} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                             />

                    </div>
  

        {/* Buttons */}
          <div className="col-span-12 grid grid-cols-12 gap-x-6 mt-6">

            {/* Back */}
            <div className="col-span-6">
              
              <button
                onClick={() => props.backFun()}
                className={`shadow-lg w-full px-6 py-4 ${backButtonColor} text-white font-medium text-xs leading-tight  rounded  ${backBtnHoverColor} hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
              >
                Back
              </button>
            </div>

            {/* Submit */}
            <div className="col-span-6">
              
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

export default ComplaintRate

//////////////////////////////////////////////
// Export to : GreivancesComplaints.js
//////////////////////////////////////////////