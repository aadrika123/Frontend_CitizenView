//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterCitizenEntryForm
//    DESCRIPTION - WaterCitizenEntryForm compomnent 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import DocumentEdit from '../../Components/WaterComponent/DocumentEdit'
import UploadDocument from '../../Components/WaterComponent/UploadDocument'
import ConnectionDetailScreen from '../../Components/WaterComponent/WaterNewApply/ConnectionDetailScreen'
import PropertyDetailScreen from '../../Components/WaterComponent/WaterNewApply/PropertyDetailScreen'
import PropertyRegistryScreen from '../../Components/WaterComponent/WaterNewApply/PropertyRegistryScreen'

import ScreenConnectionThrough from '../../Components/WaterComponentNew/WaterApplyForm/ScreenConnectionThrough'
import ScreenConnType from '../../Components/WaterComponentNew/WaterApplyForm/ScreenConnType'
import ScreenPropertyType from '../../Components/WaterComponentNew/WaterApplyForm/ScreenPropertyType'
import ScreenOwnerType from '../../Components/WaterComponentNew/WaterApplyForm/ScreenOwnerType'
import ScreenWardNo from '../../Components/WaterComponentNew/WaterApplyForm/ScreenWardNo'
import ScreenTotalArea from '../../Components/WaterComponentNew/WaterApplyForm/ScreenTotalArea'
import ScreenLandmark from '../../Components/WaterComponentNew/WaterApplyForm/ScreenLandmark'
import ScreenPin from '../../Components/WaterComponentNew/WaterApplyForm/ScreenPin'
import ScreenAddress from '../../Components/WaterComponentNew/WaterApplyForm/ScreenAddress'
import ScreenFlat from '../../Components/WaterComponentNew/WaterApplyForm/ScreenFlat'
import ScreenApplicantDetail from '../../Components/WaterComponentNew/WaterApplyForm/ScreenApplicantDetail'
import ScreenKhataNo from '../../Components/WaterComponentNew/WaterApplyForm/ScreenKhataNo'
import ScreenBindBookNo from '../../Components/WaterComponentNew/WaterApplyForm/ScreenBindBookNo'
import ScreenAccountNo from '../../Components/WaterComponentNew/WaterApplyForm/ScreenAccountNo'
import ScreenCategoryType from '../../Components/WaterComponentNew/WaterApplyForm/ScreenCategoryType'
import ScreenFormReview from '../../Components/WaterComponentNew/WaterApplyForm/ScreenFormReview'
import ThemeStyle from '../../Components/Styles/ThemeStyle'
import FeedbackComponent from './FeedbackComponent'



function WaterCitizenEntryForm() {


  //destructuring predefined colors to maintain uniform theme everywhere
  const { bgHeaderColor, titleColor, nextButtonColor, bgCardColor, bgInfoColor, infoTextColor, backButtonColor, backBtnHoverColor, nextBtnHoverColor } = ThemeStyle()


  //formIndex variable to hold number of screen to show in form
  const [formIndex, setFormIndex] = useState(1)
  const [allScreenData, setallScreenData] = useState({})

  //backward 1 step from currentIndex
  const backFun = () => setFormIndex(prev => prev - 1)

  //forward 1 step from currentIndex
  const nextFun = () => setFormIndex(prev => prev + 1)

  console.log('form index', formIndex)


  {/* After Review Submitting Final Data */ }
  const submitButtonToggle = () => {
    alert("submit")
  }

  {/* Collecting data from all screen */ }
  const CollectAllScreenData = (key, ScreenData) => {
    setallScreenData({ ...allScreenData, [key]: ScreenData })
    console.log("all form Data", allScreenData)

  }
  return (
    <>
      {/* Connection Type */}
      {formIndex == 1 && <ScreenConnType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* Connection Through */}
      {formIndex == 2 && <ScreenConnectionThrough nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* Property Type  */}
      {formIndex == 3 && <ScreenPropertyType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* owner type */}
      {formIndex == 4 && <ScreenOwnerType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* Ward no */}
      {formIndex == 5 && <ScreenWardNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* Total area */}
      {formIndex == 6 && <ScreenTotalArea nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* Landmark*/}
      {formIndex == 7 && <ScreenLandmark nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* Pin code */}
      {formIndex == 8 && <ScreenPin nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* Address */}
      {formIndex == 9 && <ScreenAddress nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* No. of flat */}
      {formIndex == 10 && <ScreenFlat nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/*Applicant List */}
      {formIndex == 11 && <ScreenApplicantDetail nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* khata no */}
      {formIndex == 12 && <ScreenKhataNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* Bind Book No */}
      {formIndex == 13 && <ScreenBindBookNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* Acount No*/}
      {formIndex == 14 && <ScreenAccountNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/*Category Type */}
      {formIndex == 15 && <ScreenCategoryType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}

      {/* Review Form */}
      {formIndex == 16 && <ScreenFormReview nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} submitFun={submitButtonToggle} />}

      <div>

        {/* This feedback component display's real time data Entry in the form */}
        <FeedbackComponent allFormData={allScreenData} />


      </div>
    </>
  )
}

export default WaterCitizenEntryForm