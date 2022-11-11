import axios from 'axios'
import { useEffect, useState } from 'react'
import FeedbackScreen from '../../Components/PropertyComponents/InputScreens/FeedbackScreen'
import Screen1 from '../../Components/PropertyComponents/InputScreens/Screen1'
import Screen16 from '../../Components/PropertyComponents/InputScreens/Screen16'
import Screen17 from '../../Components/PropertyComponents/InputScreens/Screen17'
import Screen1Ownweship from '../../Components/PropertyComponents/InputScreens/Screen1Ownweship'
import Screen1PropertyType from '../../Components/PropertyComponents/InputScreens/Screen1PropertyType'
import Screen1PropertyZone from '../../Components/PropertyComponents/InputScreens/Screen1PropertyZone'
import Screen2 from '../../Components/PropertyComponents/InputScreens/Screen2'
import Screen2Hording from '../../Components/PropertyComponents/InputScreens/Screen2Hording'
import Screen2PetrolPump from '../../Components/PropertyComponents/InputScreens/Screen2PetrolPump'
import Screen2RainWater from '../../Components/PropertyComponents/InputScreens/Screen2RainWater'
import Screen3 from '../../Components/PropertyComponents/InputScreens/Screen3'
import Screen4 from '../../Components/PropertyComponents/InputScreens/Screen4'
import Screen4CorrAddress from '../../Components/PropertyComponents/InputScreens/Screen4CorrAddress'
import Screen5 from '../../Components/PropertyComponents/InputScreens/Screen5'
import Screen6 from '../../Components/PropertyComponents/InputScreens/Screen6'
import Screen7 from '../../Components/PropertyComponents/InputScreens/Screen7'
import Screen7FloorDetailsNew from '../../Components/PropertyComponents/InputScreens/Screen7FloorDetailsNew'
import Screen7OwnerDetails from '../../Components/PropertyComponents/InputScreens/Screen7OwnerDetails'
import PropertyApiList from '../../Components/PropertyComponents/PropertyApiList'

function PropertyCitizenEntryForm() {

    const {propertySafApplyMasterData} = PropertyApiList();

    //formIndex variable to hold number of screen to show in form
    const [formIndex, setFormIndex] = useState(1)

   
    const [floorDetails, setFloorDetails] = useState()
    const [ownerDetails, setOwnerDetails] = useState()
    const [safNo, setSafNo] = useState() // This is Genetated SAF No

    //All Screens Data
    const [allScreenData, setAllScreenData] = useState([])

    const saveScreenData = (key, values) => {
        setAllScreenData({ ...allScreenData, [key]: values })
    }

    console.log("allScreenData==========", allScreenData)


    //Master Data States
    const [masterData, setMasterData] = useState()

    //backward 1 step from currentIndex
    const backFun = () => setFormIndex(prev => prev - 1)

    //forward 1 step from currentIndex
    const nextFun = () => setFormIndex(prev => prev + 1)


    const bearer = "1478|vGZADnTinTHsaluolnVXrh5wQiR2PaIJeAMzBz9k";

    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }


    useEffect(() => {
        axios.get(propertySafApplyMasterData, header)
            .then(function (res) {
                // console.log("Masster Data", res.data.data)
                setMasterData(res.data.data)
            })
            .catch(function (err) {
                console.log("Master Data Fetch Error", err)
            })
    }, [])


    const payloadData = {
        "assessmentType": "NewAssessment",
        // basic details
        "ward": allScreenData?.wardDetails?.wardNo,
        "newWard": allScreenData?.wardDetails?.newWardNo,
        "ownershipType": allScreenData?.ownerdhip?.ownershipType,
        "propertyType": allScreenData?.propertyType?.propertyType,
        "zone": allScreenData?.propertyZone?.zone,
        "isMobileTower": allScreenData?.hasMobileTower?.hasMobileTower,
        "towerArea": allScreenData?.mobileTowerArea?.mobileTowerArea,
        "towerInstallationDate": allScreenData?.mobileTowerArea?.mobileTowerInstallDate,
        "isHoardingBoard": allScreenData?.hasHoardingBoard?.hasHoardingBoard,
        "hoardingArea": allScreenData?.hasHoardingBoard?.hoardingBoardArea,
        "hoardingInstallationDate": allScreenData?.hasHoardingBoard?.hoardingBoardInstallDate,
        "isPetrolPump": allScreenData?.hasPetrolPump?.hasPetrolPump,
        "undergroundArea": allScreenData?.hasPetrolPump?.petrolPumpArea,
        "petrolPumpCompletionDate": allScreenData?.hasPetrolPump?.petrolPumpInstallDate,
        "isWaterHarvesting": allScreenData?.hasRailWater?.hasRailWater,

        // electricity Details
        "electricityConnection":allScreenData?.electricityDetails?.electricConncectionCategory,
        "electricityCustNo": allScreenData?.electricityDetails?.electricKno,
        "electricityAccNo": allScreenData?.electricityDetails?.electricAccNo,
        "electricityBindBookNo": allScreenData?.electricityDetails?.electricBindBookNo,

        //Water Details
        "buildingPlanApprovalNo": allScreenData?.waterDetails?.buildingPlanApproveNo,
        "buildingPlanApprovalDate": allScreenData?.waterDetails?.buildingPlanApproveDate,
        "waterConnNo": allScreenData?.waterDetails?.waterConsumerNo,
        "waterConnDate": allScreenData?.waterDetails?.waterConnectionDate,

        // propertyAddressDetails
        "khataNo":allScreenData?.propertyDetails?.propertyKhataNo,
        "plotNo": allScreenData?.propertyDetails?.propertyPlotNo,
        "villageMaujaName": allScreenData?.propertyDetails?.propertyVillageMauja,
        "roadType": allScreenData?.propertyDetails?.propertyRoadWidth,
        "areaOfPlot": allScreenData?.propertyDetails?.propertyAreaOfPlot,
        "propAddress": allScreenData?.propertyAddress?.propLocality,
        "propCity": allScreenData?.propertyAddress?.propCity,
        "propDist":  allScreenData?.propertyAddress?.propDistrict,
        "propPinCode": allScreenData?.propertyAddress?.propPin,
        "corrAddress": allScreenData?.propertyCorrAddress?.corrLocality,
        "corrCity": allScreenData?.propertyCorrAddress?.corrCity,
        "corrDist": allScreenData?.propertyCorrAddress?.corrDistrict,
        "corrPinCode": allScreenData?.propertyCorrAddress?.corrPin,
        "landOccupationDate": "2022-09-01",
        "previousHoldingId": 0,
        "holdingNo": "sadf474",

        //owner
        "owner": allScreenData?.ownerDetails,              //Screen 12
        //floor
        "floor": allScreenData?.floorDetails, //Screen 5

    }
    console.log("Payload Data", payloadData)


    return (
        <>
            <div>
                {formIndex == 1 && <Screen1 nextFun={nextFun} backFun={backFun} masterData={masterData} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 2 && <Screen1Ownweship nextFun={nextFun} backFun={backFun} masterData={masterData} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 3 && <Screen1PropertyType nextFun={nextFun} backFun={backFun} masterData={masterData} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 4 && <Screen1PropertyZone nextFun={nextFun} backFun={backFun} masterData={masterData} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 5 && <Screen2 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 6 && <Screen2Hording nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 7 && <Screen2PetrolPump nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 8 && <Screen2RainWater nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 9 && <Screen3 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 10 && <Screen4 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 11 && <Screen4CorrAddress nextFun={nextFun} backFun={backFun} data={saveScreenData} propertyData={allScreenData} formIndex={formIndex} />}
                {formIndex == 12 && <Screen5 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 13 && <Screen6 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 14 && <Screen7 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 15 && <Screen7OwnerDetails nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}                                
                {formIndex == 16 && <Screen7FloorDetailsNew nextFun={nextFun} backFun={backFun} masterData={masterData} data={saveScreenData} formIndex={formIndex} />}                
                {formIndex == 17 && <Screen16 nextFun={nextFun} backFun={backFun} data={setSafNo} payloadData={payloadData} formIndex={formIndex} />}
                {formIndex == 18 && <Screen17 nextFun={nextFun} backFun={backFun} safNo={safNo} formIndex={formIndex} />}

               
                {/* {formIndex == 16 && <Screen9 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 15 && <Screen8 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 17 && <Screen10 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 18 && <Screen11 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 19 && <Screen12 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 20 && <Screen13 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 21 && <Screen14 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />}
                {formIndex == 22 && <Screen15 nextFun={nextFun} backFun={backFun} data={saveScreenData} formIndex={formIndex} />} */}
                
               
                <FeedbackScreen payloadData={payloadData} />


            </div>
        </>
    )
}

export default PropertyCitizenEntryForm