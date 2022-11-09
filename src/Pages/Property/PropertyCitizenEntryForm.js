import axios from 'axios'
import { useEffect, useState } from 'react'
import FeedbackScreen from '../../Components/PropertyComponents/InputScreens/FeedbackScreen'
import Screen1 from '../../Components/PropertyComponents/InputScreens/Screen1'
import Screen10 from '../../Components/PropertyComponents/InputScreens/Screen10'
import Screen11 from '../../Components/PropertyComponents/InputScreens/Screen11'
import Screen12 from '../../Components/PropertyComponents/InputScreens/Screen12'
import Screen13 from '../../Components/PropertyComponents/InputScreens/Screen13'
import Screen14 from '../../Components/PropertyComponents/InputScreens/Screen14'
import Screen15 from '../../Components/PropertyComponents/InputScreens/Screen15'
import Screen16 from '../../Components/PropertyComponents/InputScreens/Screen16'
import Screen17 from '../../Components/PropertyComponents/InputScreens/Screen17'
import Screen2 from '../../Components/PropertyComponents/InputScreens/Screen2'
import Screen2Hording from '../../Components/PropertyComponents/InputScreens/Screen2Hording'
import Screen2PetrolPump from '../../Components/PropertyComponents/InputScreens/Screen2PetrolPump'
import Screen2RainWater from '../../Components/PropertyComponents/InputScreens/Screen2RainWater'
import Screen3 from '../../Components/PropertyComponents/InputScreens/Screen3'
import Screen4 from '../../Components/PropertyComponents/InputScreens/Screen4'
import Screen5 from '../../Components/PropertyComponents/InputScreens/Screen5'
import Screen6 from '../../Components/PropertyComponents/InputScreens/Screen6'
import Screen7 from '../../Components/PropertyComponents/InputScreens/Screen7'
import Screen8 from '../../Components/PropertyComponents/InputScreens/Screen8'
import Screen9 from '../../Components/PropertyComponents/InputScreens/Screen9.1'

function PropertyCitizenEntryForm() {
    //formIndex variable to hold number of screen to show in form
    const [formIndex, setFormIndex] = useState(1)
    const [isResidential, setIsResidential] = useState()
    const [typeOfProperty, setTypeOfProperty] = useState()
    const [plotSize, setPlotSize] = useState()
    const [numberOfBasements, setNumberOfBasements] = useState()
    const [floorDetails, setFloorDetails] = useState()
    const [pinPropertyLocation, setPinPropertyLocation] = useState()
    const [pincode, setPincode] = useState()
    const [propertyAddress, setPropertyAddress] = useState()
    const [landmark, setLandmark] = useState()
    const [addressDocumantType, setAddressDocumantType] = useState()
    const [ownerType, setOwnerType] = useState()
    const [ownerDetails, setOwnerDetails] = useState()
    const [specialOwnerCategory, setSpecialOwnerCategory] = useState()
    const [ownerAddress, setOwnerAddress] = useState()
    const [identityDocType, setIdentityDocType] = useState()
    const [safNo, setSafNo] = useState()

    //Screens Data
    const [basicDetailsData, setBasicDetailsData] = useState()

console.log("basicDetailsData",basicDetailsData)
    //Master Data States
    const [masterData, setMasterData] = useState()

    //backward 1 step from currentIndex
    const backFun = () => setFormIndex(prev => prev - 1)

    //forward 1 step from currentIndex
    const nextFun = () => setFormIndex(prev => prev + 1)

    // console.log('form index',formIndex)

    const bearer = "1426|1zWdOB2vIqIIR4YgQkSMNjo533BFflMrFbbxMMCP";

    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }


    useEffect(() => {
        axios.get('http://192.168.0.16:8000/api/property/saf/master-saf', header)
            .then(function (res) {
                console.log("Masster Data", res.data.data)
                setMasterData(res.data.data)
            })
            .catch(function (err) {
                console.log("Master Data Fetch Error", err)
            })
    }, [])


    const payloadData = {
        "assessmentType": "NewAssessment",
        'isResidential' :"",
        // basic details
        "ward": basicDetailsData?.wardNo,
        "newWard": basicDetailsData?.newWardNo,
        "ownershipType": basicDetailsData?.ownershipType,                
        "propertyType": basicDetailsData?.propertyType,          
        "zone": basicDetailsData?.zone,
        "isMobileTower": 0,
        "towerArea": 222.1,
        "towerInstallationDate": "2017-01-04",
        "isHoardingBoard": 0,
        "hoardingArea": "3434.5",
        "hoardingInstallationDate": "2017-01-04",
        "isPetrolPump": 0,
        "undergroundArea": "344.54",
        "petrolPumpCompletionDate": "2017-01-04",
        "isWaterHarvesting": 1,

        // electricityandWaterDetails
        "electricityConnection": "",
        "electricityCustNo": "535",
        "electricityAccNo": "5454",
        "electricityBindBookNo": "5454",
        "buildingPlanApprovalNo": "45454",
        "buildingPlanApprovalDate": "2222-11-11",
        "waterConnNo": "125468",
        "waterConnDate": "2018-05-25",

        // propertyAddressDetails
        "khataNo": "0000",
        "plotNo": "000",
        "villageMaujaName": "Test",
        "roadType": 41.111,
        "areaOfPlot": plotSize?.plotSize,                         //Screen3   
        "propAddress": "this is add",
        "propCity": "rncsdf",
        "propDist": "buxtr",
        "propPinCode": "878787",
        "corrAddress": "nfgf",
        "corrCity": "abc",
        "corrDist": "cdf",
        "corrPinCode": "141414",
        "landOccupationDate": "2022-09-01",
        "previousHoldingId": 0,
        "holdingNo": "sadf474",

        //owner
        "owner": ownerDetails,              //Screen 12

        //floor
        "floor": floorDetails, //Screen 5

        //Extra
        'numberOfBasements': numberOfBasements?.numberOfBasements, //screen4
        'pinPropertyLocation': pinPropertyLocation?.pinPropertyLocation, //Screen 6
        'pincode': pincode?.pincode,                    //Screen 7
        'propertyAddress': propertyAddress,              //Screen 8
        'landmark': landmark?.landmark,                  //Screen 9
        'addressDocumantType': addressDocumantType?.addressDocumantType, //Screen10
        'ownerType': ownerType?.ownerType,                    //Screen 11
        'specialOwnerCategory': specialOwnerCategory?.specialOwnerCategory, //Screen 13
        'ownerAddress': ownerAddress,                       //Scree14
        'identityDocType': identityDocType                 //Screen15

    }


    const screen2Data = (e) => {
        console.log("Screen 2 Data in Entry Form", e)
        setTypeOfProperty(e)
    }
    const screen3Data = (e) => {
        console.log("Screen 3 Data in Entry Form", e)
        setPlotSize(e)
    }
    const screen4Data = (e) => {
        console.log("Screen 4 Data in Entry Form", e)
        setNumberOfBasements(e)
    }
    const screen5Data = (e) => {
        console.log("Screen 5 Data in Entry Form", e)
        setFloorDetails(e)
    }
    const screen6Data = (e) => {
        console.log("Screen 6 Data in Entry Form", e)
        setPinPropertyLocation(e)
    }
    const screen7Data = (e) => {
        console.log("Screen 7 Data in Entry Form", e)
        setPincode(e)
    }
    const screen8Data = (e) => {
        console.log("Screen 8 Data in Entry Form", e)
        setPropertyAddress(e)
    }
    const screen9Data = (e) => {
        console.log("Screen 9 Data in Entry Form", e)
        setLandmark(e)
    }
    const screen10Data = (e) => {
        console.log("Screen 10 Data in Entry Form", e)
        setAddressDocumantType(e)
    }
    const screen11Data = (e) => {
        console.log("Screen 11 Data in Entry Form", e)
        setOwnerType(e)
    }
    const screen12Data = (e) => {
        console.log("Screen 12 Data in Entry Form", e)
        setOwnerDetails(e)
    }
    const screen13Data = (e) => {
        console.log("Screen 13 Data in Entry Form", e)
        setSpecialOwnerCategory(e)
    }
    const screen14Data = (e) => {
        console.log("Screen 14 Data in Entry Form", e)
        setOwnerAddress(e)
    }
    const screen15Data = (e) => {
        console.log("Screen 15 Data in Entry Form", e)
        setIdentityDocType(e)
    }
    const screen16Data = (e) => {
        console.log("Screen 16 Data in Entry Form is SAF No", e)
        setSafNo(e)
    }



    return (
        <>
            <div>
                {formIndex == 1 && <Screen1 nextFun={nextFun} backFun={backFun} masterData={masterData} data={setBasicDetailsData} formIndex={formIndex} />}
                {formIndex == 2 && <Screen2 nextFun={nextFun} backFun={backFun} data={screen2Data} formIndex={formIndex} />}
                {formIndex == 3 && <Screen2Hording nextFun={nextFun} backFun={backFun} data={screen2Data} formIndex={formIndex} />}
                {formIndex == 4 && <Screen2PetrolPump nextFun={nextFun} backFun={backFun} data={screen2Data} formIndex={formIndex} />}
                {formIndex == 5 && <Screen2RainWater nextFun={nextFun} backFun={backFun} data={screen2Data} formIndex={formIndex} />}
                {formIndex == 6 && <Screen3 nextFun={nextFun} backFun={backFun} data={screen3Data} formIndex={formIndex} />}
                {formIndex == 7 && <Screen4 nextFun={nextFun} backFun={backFun} data={screen4Data} formIndex={formIndex} />}
                {formIndex == 8 && <Screen5 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} />}
                {formIndex == 9 && <Screen6 nextFun={nextFun} backFun={backFun} data={screen6Data} formIndex={formIndex} />}
                {formIndex == 10 && <Screen7 nextFun={nextFun} backFun={backFun} data={screen7Data} formIndex={formIndex} />}
                {formIndex == 11 && <Screen8 nextFun={nextFun} backFun={backFun} data={screen8Data} formIndex={formIndex} />}
                {formIndex == 12 && <Screen9 nextFun={nextFun} backFun={backFun} data={screen9Data} formIndex={formIndex} />}
                {formIndex == 13 && <Screen10 nextFun={nextFun} backFun={backFun} data={screen10Data} formIndex={formIndex} />}
                {formIndex == 14 && <Screen11 nextFun={nextFun} backFun={backFun} data={screen11Data} formIndex={formIndex} />}
                {formIndex == 15 && <Screen12 nextFun={nextFun} backFun={backFun} data={screen12Data} formIndex={formIndex} />}
                {formIndex == 16 && <Screen13 nextFun={nextFun} backFun={backFun} data={screen13Data} formIndex={formIndex} />}
                {formIndex == 17 && <Screen14 nextFun={nextFun} backFun={backFun} data={screen14Data} formIndex={formIndex} />}
                {formIndex == 18 && <Screen15 nextFun={nextFun} backFun={backFun} data={screen15Data} formIndex={formIndex} />}
                {formIndex == 19 && <Screen16 nextFun={nextFun} backFun={backFun} data={screen16Data} payloadData={payloadData} formIndex={formIndex} />}
                {formIndex == 20 && <Screen17 nextFun={nextFun} backFun={backFun} safNo={safNo} formIndex={formIndex} />}

                <FeedbackScreen payloadData={payloadData} />

                {/* <div className={`w-full absolute top-10 transition-all ${formIndex == 1 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen1 nextFun={nextFun} backFun={backFun} data={screen1Data} formIndex={formIndex} /> </div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 2 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen2 nextFun={nextFun} backFun={backFun} data={screen2Data} formIndex={formIndex} /> </div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 3 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen3 nextFun={nextFun} backFun={backFun} data={screen3Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 4 ? 'translate-x-0' : 'translate-x-full'}`}> <Screen4 nextFun={nextFun} backFun={backFun} data={screen4Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 5 ? 'translate-x-0' : 'translate-x-full'}`}><Screen5 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 6 ? 'translate-x-0' : 'translate-x-full'}`}><Screen6 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 7 ? 'translate-x-0' : 'translate-x-full'}`}><Screen7 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 8 ? 'translate-x-0' : 'translate-x-full'}`}><Screen8 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 9 ? 'translate-x-0' : 'translate-x-full'}`}><Screen9 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 10 ? 'translate-x-0' : 'translate-x-full'}`}><Screen10 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 11 ? 'translate-x-0' : 'translate-x-full'}`}><Screen11 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 12 ? 'translate-x-0' : 'translate-x-full'}`}><Screen12 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 13 ? 'translate-x-0' : 'translate-x-full'}`}><Screen13 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 14 ? 'translate-x-0' : 'translate-x-full'}`}><Screen14 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 15 ? 'translate-x-0' : 'translate-x-full'}`}><Screen15 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 16 ? 'translate-x-0' : 'translate-x-full'}`}><Screen16 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
                <div className={`w-full absolute top-10 transition-all ${formIndex == 17 ? 'translate-x-0' : 'translate-x-full'}`}><Screen17 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div> */}



                {/* <div className={`${formIndex == 1 ? 'block' : 'hidden' }`}> <Screen1 nextFun={nextFun} backFun={backFun} data={screen1Data} formIndex={formIndex} /> </div>
           <div className={`${formIndex == 2 ? 'block' : 'hidden' }`}> <Screen2 nextFun={nextFun} backFun={backFun} data={screen2Data} formIndex={formIndex} /> </div>
           <div className={`${formIndex == 3 ? 'block' : 'hidden' }`}> <Screen3 nextFun={nextFun} backFun={backFun} data={screen3Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 4 ? 'block' : 'hidden' }`}> <Screen4 nextFun={nextFun} backFun={backFun} data={screen4Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 5 ? 'block' : 'hidden' }`}> <Screen5 nextFun={nextFun} backFun={backFun} data={screen5Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 6 ? 'block' : 'hidden' }`}> <Screen6 nextFun={nextFun} backFun={backFun} data={screen6Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 7 ? 'block' : 'hidden' }`}> <Screen7 nextFun={nextFun} backFun={backFun} data={screen7Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 8 ? 'block' : 'hidden' }`}> <Screen8 nextFun={nextFun} backFun={backFun} data={screen8Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 9 ? 'block' : 'hidden' }`}> <Screen9 nextFun={nextFun} backFun={backFun} data={screen9Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 10 ? 'block' : 'hidden' }`}> <Screen10 nextFun={nextFun} backFun={backFun} data={screen10Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 11 ? 'block' : 'hidden' }`}> <Screen11 nextFun={nextFun} backFun={backFun} data={screen11Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 12 ? 'block' : 'hidden' }`}> <Screen12 nextFun={nextFun} backFun={backFun} data={screen12Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 13 ? 'block' : 'hidden' }`}> <Screen13 nextFun={nextFun} backFun={backFun} data={screen13Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 14 ? 'block' : 'hidden' }`}> <Screen14 nextFun={nextFun} backFun={backFun} data={screen14Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 15 ? 'block' : 'hidden' }`}> <Screen15 nextFun={nextFun} backFun={backFun} data={screen15Data} formIndex={formIndex} /></div>
           <div className={`${formIndex == 16 ? 'block' : 'hidden' }`}> <Screen16 nextFun={nextFun} backFun={backFun} data={screen16Data} payloadData={payloadData} formIndex={formIndex} /></div>
           <div className={`${formIndex == 17 ? 'block' : 'hidden' }`}> <Screen17 nextFun={nextFun} backFun={backFun} safNo={safNo} formIndex={formIndex} /></div> */}



            </div>
        </>
    )
}

export default PropertyCitizenEntryForm