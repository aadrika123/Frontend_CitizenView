export default function CitizenApplyApiList() {
    let baseUrl = "http://192.168.0.16:8000"
    let apiList = {
        //connection type master data
        api_getConnectionType: `${baseUrl}/api/water/get-connection-type`,

        //connection through master data
        api_getConnectionThrough: `${baseUrl}/api/water/get-connection-through`,

        //property type master data
        api_getPropertyType: `${baseUrl}/api/water/get-property-type`,

        //owner type master data
        api_getOwnerType: `${baseUrl}/api/water/get-owner-type`,

        //owner type master data
        api_getWardNo: `${baseUrl}/api/water/get-ward-no`,

        //owner type master data
        api_postWaterNewApply: `${baseUrl}/api/water/crud/new-connection`,




    }

    return apiList
}