import BaseURL from "../Common/BaseURL"

export default function PropertyApiList() {


    // let baseUrl = "http://192.168.0.16:8000"

    // let baseUrl = "http://192.168.0.214:8000"   ////Ansu System
    
    // let baseUrl = "http://192.168.0.240:8000"   ////SAM System
    
    let baseUrl = "http://203.129.217.245:80"   ////SAM System PUBLIC

    // const {baseUrl} = BaseURL();

    let PropertyApiList = {

        bearer : "1740|lbuN2kDH0w0YGoo12mE6EDN6HHyVdh93w0XFFzjk",
        
        propertySafApplyMasterData: `${baseUrl}/api/property/saf/master-saf`,
        propertySafApply: `${baseUrl}/api/property/saf/apply`,

        viewAppliedSafAplications: `${baseUrl}/api/citizens/applied-applications`,  //Method get
        
        amountCalculateBySafId: `${baseUrl}/api/property/saf/calculate-by-saf-id`,  //Method POST

        generateOrderId: `${baseUrl}/api/payment/get-order-id`, //POST

        verifyPaymentStatus: `${baseUrl}/api/payment/verify-payment-status`, //POST






    }

    return PropertyApiList
}