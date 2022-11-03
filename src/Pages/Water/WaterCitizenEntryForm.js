//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 02 november 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterCitizenEntryForm
//    DESCRIPTION - WaterCitizenEntryForm compomnent 
//////////////////////////////////////////////////////////////////////////////////////
import React,{useState} from 'react'
import DocumentEdit from '../../Components/WaterComponent/DocumentEdit'
import UploadDocument from '../../Components/WaterComponent/UploadDocument'
import ConnectionDetailScreen from '../../Components/WaterComponent/WaterNewApply/ConnectionDetailScreen'
import PropertyDetailScreen from '../../Components/WaterComponent/WaterNewApply/PropertyDetailScreen'
import PropertyRegistryScreen from '../../Components/WaterComponent/WaterNewApply/PropertyRegistryScreen'


function WaterCitizenEntryForm() {
  //formIndex variable to hold number of screen to show in form
  const [formIndex, setFormIndex] = useState(1)

  //backward 1 step from currentIndex
  const backFun = () => setFormIndex(prev => prev - 1)

  //forward 1 step from currentIndex
  const nextFun = () => setFormIndex(prev => prev + 1)

  console.log('form index', formIndex)
  return (
    <>
    {/* <h1 className={`font-bold text-center text-lg`}>Apply For New Water & Sewerage Connection</h1> */}
      {formIndex == 1 && <PropertyDetailScreen nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
      {formIndex == 2 && <ConnectionDetailScreen nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
       {formIndex == 3 && <PropertyRegistryScreen nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
      {formIndex == 4 && <UploadDocument nextFun={nextFun} backFun={backFun} formIndex={formIndex} />}
      {formIndex == 5 && <DocumentEdit nextFun={nextFun} backFun={backFun} formIndex={formIndex} />} 
    </>
  )
}

export default WaterCitizenEntryForm