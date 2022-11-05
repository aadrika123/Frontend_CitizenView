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
import ScreenSafNo from '../../Components/WaterComponentNew/WaterApplyForm/ScreenSafNo'
import ScreenOwnerType from '../../Components/WaterComponentNew/WaterApplyForm/ScreenOwnerType'
import ScreenWardNo from '../../Components/WaterComponentNew/WaterApplyForm/ScreenWardNo'
import ScreenTotalArea from '../../Components/WaterComponentNew/WaterApplyForm/ScreenTotalArea'
import ScreenLandmark from '../../Components/WaterComponentNew/WaterApplyForm/ScreenLandmark'
import ScreenPin from '../../Components/WaterComponentNew/WaterApplyForm/ScreenPin'
import ScreenAddress from '../../Components/WaterComponentNew/WaterApplyForm/ScreenAddress'
import ScreenFlat from '../../Components/WaterComponentNew/WaterApplyForm/ScreenFlat'


function WaterCitizenEntryForm() {
  //formIndex variable to hold number of screen to show in form
  const [formIndex, setFormIndex] = useState(1)
  const [allScreenData, setallScreenData] = useState({})

  //backward 1 step from currentIndex
  const backFun = () => setFormIndex(prev => prev - 1)

  //forward 1 step from currentIndex
  const nextFun = () => setFormIndex(prev => prev + 1)

  console.log('form index', formIndex)


  const CollectAllScreenData = (key, ScreenData) => {
    console.log("Screen Data in main form 1",ScreenData)
    setallScreenData ({...allScreenData,[key]:ScreenData})
  }
  return (
    <>
      {/* <h1 className={`font-bold text-center text-lg`}>Apply For New Water & Sewerage Connection</h1> */}
      {/* {formIndex == 1 && <PropertyDetailScreen nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
      {formIndex == 2 && <ConnectionDetailScreen nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
      {formIndex == 3 && <PropertyRegistryScreen nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
      {formIndex == 4 && <UploadDocument nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
      {formIndex == 5 && <DocumentEdit nextFun={nextFun} backFun={backFun} formIndex={formIndex} />} */}

      {formIndex == 1 && <ScreenConnType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
      {formIndex == 2 && <ScreenConnectionThrough nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
      {formIndex == 3 && <ScreenPropertyType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
      {formIndex == 4 && <ScreenOwnerType nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
      {formIndex == 5 && <ScreenSafNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
      {formIndex == 6 && <ScreenWardNo nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
      {formIndex == 7 && <ScreenTotalArea nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
      {formIndex == 8 && <ScreenLandmark nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
      {formIndex == 9 && <ScreenPin nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
      {formIndex == 10 && <ScreenAddress nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
      {formIndex == 11 && <ScreenFlat nextFun={nextFun} backFun={backFun} formIndex={formIndex} CollectScreenDataFun={CollectAllScreenData} />}
    </>
  )
}

export default WaterCitizenEntryForm