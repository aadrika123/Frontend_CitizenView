import BaseURL from "../Common/BaseURL"

export default function PropertyApiList() {


    // let baseUrl = "http://192.168.0.16:8000"
    const {baseUrl} = BaseURL();

    let PropertyApiList = {

        bearer : "1558|qIAxvcMK9mNfweyy1hDumiaqjWgBFxcfXr23lJi7",
        
        propertySafApplyMasterData: `${baseUrl}/api/property/saf/master-saf`,
        propertySafApply: `${baseUrl}/api/property/saf/apply`,



    }

    return PropertyApiList
}