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
import CitizenApplyApiList from '../../Components/WaterComponentNew/CitizenViewWaterApiList'
import axios from 'axios'
import ScreenPayment from '../../Components/WaterComponentNew/WaterApplyForm/ScreenPayment'



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

  const { api_postWaterNewApply } = CitizenApplyApiList()
  const [screenDataSubmit, setScreenDataSubmit] = useState()



  {/* Collecting data from all screen */ }
  let allFormDt = [];
  const CollectAllScreenData = (key, ScreenData) => {
    setallScreenData({ ...allScreenData, [key]: ScreenData })
    console.log("all form Data", allScreenData)

    // console.log("allFormDAtaSwati", allFormDt.push({ ...allScreenData, [key]: ScreenData }))

  }


  {/* After Review Submitting Final Data */ }
  const submitButtonToggle = () => {
    alert("submit")

    // let token = window.localStorage.getItem('token')
    let token = '1475|XrSd3de86bSUpbUnog4TA7YtodIknrgrnU9N6g22'
    console.log('token at basic details is post method...', token)
    const header = {
      headers:
      {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      }
    }


    


    const requestBody = {
      // basic details
      connectionTypeId: allScreenData?.connectionType?.typeOfConnection,
      propertyTypeId: allScreenData?.PropType?.typeOfProperty,
      ownerType: allScreenData?.ownerType?.typeOfOwner,
      // proofDocumentId: allScreenData.propertyType,
      // category: allScreenData.categoryType.categoryType,
      // category: "BPL",
      // pipelineTypeId: "1",

      connection_through: allScreenData?.connectionThrough,
      saf_no: allScreenData?.connectionThrough?.safNo,
      holdingNo: allScreenData.connectionThrough.holdingNo,
      propertyTypeId: allScreenData?.PropType,
      category: allScreenData?.PropType?.categoryType,
      pipelineTypeId: allScreenData?.PropType?.pipelineType,
      flatCount: allScreenData?.PropType?.noFlat,
      wardId: allScreenData?.wardNo?.wardNo,
      areaSqft: allScreenData?.totalArea?.totalArea,
      address: allScreenData?.address?.address,
      landmark: allScreenData?.landmark?.landMark,
      pin: allScreenData?.pin?.pinCode,
      // flatCount: allScreenData.noFlat.noFlat,
      elecKNo: allScreenData?.khataNo?.khataNo,
      elecBindBookNo: allScreenData?.bindBookNo?.bindBookNo,
      elecAccountNo: allScreenData?.accountNo?.accountNo,
      // elecCategory: allScreenData.waterHarvestingStatus,
      elecCategory: allScreenData.categoryScreen.categoryTypeData,

      //owner
      owners: allScreenData.applicantList,
      // owners: [
      //   {
      //     "ownerName": "Philips Huge",
      //     "guardianName": "Martin Gerrics",
      //     "mobileNo": "0123456789",
      //     "email": "123@gmail.com"
      //   },
      //   {
      //     "ownerName": "Philips Huge",
      //     "guardianName": "Martin Gerrics",
      //     "mobileNo": "0123456789",
      //     "email": "123@gmail.com"
      //   },
      //   {
      //     "ownerName": "Dipu Don",
      //     "guardianName": "Dipu",
      //     "mobileNo": "0123456789",
      //     "email": "123@gmail.com"
      //   }
      // ]



    }

    console.log('form ready to submit....', requestBody)

    // return
    axios.post(`${api_postWaterNewApply}`, requestBody, header)
      .then(function (response) {
        // setloader(false)
        console.log('response after pushing water data', response)
        setScreenDataSubmit(response.data)
        // nextFun()

      })
      .catch(function (error) {
        console.log('errorrr.... ', error);
      })

  }


  return (


    <>



      {/* Connection Type */}

      <div className={`w-full absolute top-10 transition-all ${formIndex == 1 ? 'translate-x-0' : 'translate-x-full'}`}> <ScreenConnType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 1 && <ScreenConnType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}


      {/* Connection Through */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 2 ? 'translate-x-0' : 'translate-x-full'}`}> <ScreenConnectionThrough nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 2 && <ScreenConnectionThrough nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* Property Type  */}

      <div className={`w-full absolute top-10 transition-all ${formIndex == 3 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenPropertyType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 3 && <ScreenPropertyType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* owner type */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 4 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenOwnerType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 4 && <ScreenOwnerType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* Ward no */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 5 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenWardNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 5 && <ScreenWardNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* Total area */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 6 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenTotalArea nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 6 && <ScreenTotalArea nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* Landmark*/}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 7 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenLandmark nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 7 && <ScreenLandmark nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* Pin code */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 8 ? 'translate-x-0' : 'translate-x-full'}`}> <ScreenPin nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 8 && <ScreenPin nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* Address */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 9 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenAddress nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 9 && <ScreenAddress nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/*Applicant List */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 10 ? 'translate-x-0' : 'translate-x-full'}`}> <ScreenApplicantDetail nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 11 && <ScreenApplicantDetail nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* khata no */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 11 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenKhataNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 12 && <ScreenKhataNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* Bind Book No */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 12 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenBindBookNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 13 && <ScreenBindBookNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* Acount No*/}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 13 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenAccountNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 14 && <ScreenAccountNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/*Category Type */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 14 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenCategoryType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} /></div>

      {/* {formIndex == 15 && <ScreenCategoryType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />} */}

      {/* Review Form */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 15 ? 'translate-x-0' : 'translate-x-full'}`}> <ScreenFormReview nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} submitFun={submitButtonToggle} allFormData={allScreenData} /></div>

      {/* {formIndex == 16 && <ScreenFormReview nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} submitFun={submitButtonToggle} allFormData={allScreenData} />} */}

      {/* Payment Form */}
      <div className={`w-full absolute top-10 transition-all ${formIndex == 16 ? 'translate-x-0' : 'translate-x-full'}`}>  <ScreenPayment backFun={backFun} formIndex={formIndex} submitFun={submitButtonToggle} screenDataSubmit={screenDataSubmit} /></div>

      {/* {formIndex == 17 && <ScreenPayment backFun={backFun} formIndex={formIndex} submitFun={submitButtonToggle} screenDataSubmit={screenDataSubmit} />} */}


      <div>

        {/* This feedback component display's real time data Entry in the form */}
        {formIndex != 15 && <div className={`absolute top-[48rem] w-full md:w-1/3 mx-auto clear-both`}><FeedbackComponent allFormData={allScreenData} /> </div>}


      </div>
    </>
  )
}

export default WaterCitizenEntryForm