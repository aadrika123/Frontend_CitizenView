import BaseURL from "../Common/BaseURL"

export default function PropertyApiList() {


    // let baseUrl = "http://192.168.0.16:8000"

    // let baseUrl = "http://192.168.0.214:8000"   ////Ansu System

    let baseUrl = "http://192.168.0.240:8000"   ////SAM System
    // const {baseUrl} = BaseURL();

    let PropertyApiList = {

        bearer : "1665|g3Z8sDnnX2TakMvDrgtWnU3WuPPug6Lno1jtgXF4",
        
        propertySafApplyMasterData: `${baseUrl}/api/property/saf/master-saf`,
        propertySafApply: `${baseUrl}/api/property/saf/apply`,

        viewAppliedSafAplications: `${baseUrl}/api/citizens/applied-applications`,  //Method get
        
        amountCalculateBySafId: `${baseUrl}/api/property/saf/calculate-by-saf-id`,  //Method POST

        generateOrderId: `${baseUrl}/api/payment/get-order-id` //POST





    }

    return PropertyApiList
}