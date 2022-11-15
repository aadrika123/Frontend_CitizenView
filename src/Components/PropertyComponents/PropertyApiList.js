import BaseURL from "../Common/BaseURL"

export default function PropertyApiList() {


    // let baseUrl = "http://192.168.0.16:8000"
    const {baseUrl} = BaseURL();

    let PropertyApiList = {

        bearer : "1646|P0f6wIoRwPdgQqtNYigWOd0Ursr6CeuOSndTquTe",
        
        propertySafApplyMasterData: `${baseUrl}/api/property/saf/master-saf`,
        propertySafApply: `${baseUrl}/api/property/saf/apply`,

        viewAppliedSafAplications: `${baseUrl}/api/citizens/applied-applications`,  //Method get



    }

    return PropertyApiList
}