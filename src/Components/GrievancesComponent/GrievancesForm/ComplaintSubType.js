//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 3rd November 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ComplaintSubType
//    DESCRIPTION - Citizen select complaint Sub-Type
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react'
//importing Themestyle function to use predefined colors to maintain uniform theme everywhere
import ThemeStyle from '../../Styles/ThemeStyle'

function ComplaintSubType(props) {

  // constant
  const [subType, setSubType] = useState("")

  // handle select box
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSubType({[name]:value})

    console.log("complaint sub type => ", subType)

  }

  //destructuring predefined colors to maintain uniform theme everywhere
  const {bgHeaderColor,titleColor,nextButtonColor,nextBtnHoverColor,backButtonColor,backBtnHoverColor,bgCardColor,bgInfoColor,infoTextColor} = ThemeStyle()
  
  return (
    <>

        {/* sub heading */}
        <div className="col-span-12 mt-8">
          {" "}
          <h1 className={` ${titleColor} opacity-70`}>
            {props.complaintType}
          </h1>
        </div>

        {/* headint */}
        <div className="col-span-12">
          {" "}
          <h1 className={`font-bold ${titleColor} text-2xl`}>
            Choose Complaint Sub-Type
          </h1>
        </div>

        {/* description */}
        <div className="col-span-12">
          {" "}
          <h1 className={` ${titleColor} text-xs opacity-40`}>
            The complaint type you have chosen has following complaint sub-types. Select the option of your choice form the list given below.
          </h1>
        </div>

        {/* select boxes */}
        <div className="form-group mb-4 md:mb-6 col-span-12 mt-4">
          <select name='complaintSubType' onChange={handleChange} onKeyUp={props.complaintSubType(subType)} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md" >

          <option name='complaintSubType' value='' selected disabled >--Select--</option>
          <option name='complaintSubType' value='Road needs sweeping' >Road needs sweeping</option>
          <option name='complaintSubType' value='Garbage needs to be cleared' >Garbage needs to be cleared</option>
          <option name='complaintSubType' value='Damaged garbage bin' >Damaged garbage bin</option>
          <option name='complaintSubType' value='Burning of garbage' >Burning of garbage</option>
          <option name='complaintSubType' value='Other' >Other</option>
            </select>
          </div>

  </>
  )
}

export default ComplaintSubType

///////////////////////////////////////////////////////
// Export to : ComplaintType.js
///////////////////////////////////////////////////////