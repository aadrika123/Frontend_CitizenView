import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { contextVar } from '../../Components/GlobalState/ContextVar'
import ApplicationDetailScreen from '../../Components/WaterComponent/ApplicationDetailScreen'
import ConnectionDetailScreen from '../../Components/WaterComponent/ConnectionDetailScreen'
import ConsumptionDetailScreen from '../../Components/WaterComponent/ConsumptionDetailScreen'
import MakePayment from '../../Components/WaterComponent/MakePayment'
import MyApplication from '../../Components/WaterComponent/MyApplication'
import MyConnectionScreen from '../../Components/WaterComponent/MyConnectionScreen'
import PastPaymentScreen from '../../Components/WaterComponent/PastPaymentScreen'
import PayBillScreen from '../../Components/WaterComponent/PayBillScreen'
import PayNowScreen from '../../Components/WaterComponent/PayNowScreen'
import SearchPayList from '../../Components/WaterComponent/SearchPayList'
import SubmitScreen from '../../Components/WaterComponent/SubmitScreen'
import SuccessPaymentScreen from '../../Components/WaterComponent/SuccessPaymentScreen'
import ViewBreakupScreen from '../../Components/WaterComponent/ViewBreakupScreen'
import ViewHistoryScreen from '../../Components/WaterComponent/ViewHistoryScreen'
import WaterDocScreen from '../../Components/WaterComponent/WaterDocScreen'
import HolderDetailScreen from '../../Components/WaterComponent/WaterNewApply/HolderDetailScreen'
import SearchPropertyScreen from '../../Components/WaterComponent/WaterNewApply/SearchPropertyScreen'
import WaterCitizenEntryForm from './WaterCitizenEntryForm'
import WaterIndex from './WaterIndex'

function WaterRoutes() {

    const globalData = useContext(contextVar);

    useEffect(() => {
        globalData.setModule('WATER');
    }, [])

    return (
        <Routes>
            <Route path='/water-index' element={<WaterIndex />} />
            <Route path='/water-requiredDoc' element={<WaterDocScreen />} />
            <Route path='/water-applyNew' element={<WaterCitizenEntryForm />} />
            <Route path='/water-searchProprty' element={<SearchPropertyScreen/>} />
            <Route path='/water-holderDetail' element={<HolderDetailScreen/>} />
            <Route path='/water-submitNewApply' element={<SubmitScreen/>} />
            <Route path='/water-myApplication' element={<MyApplication/>} />
            <Route path='/water-viewDetail' element={<ApplicationDetailScreen/>} />
            <Route path='/water-viewHistory' element={<ViewHistoryScreen/>} />
            <Route path='/water-viewBreakup' element={<ViewBreakupScreen/>} />
            <Route path='/water-myConnection' element={<MyConnectionScreen/>} />
            <Route path='/water-connectionDetail' element={<ConnectionDetailScreen/>} />
            <Route path='/water-consumptionDetail' element={<ConsumptionDetailScreen/>} />
            <Route path='/water-payBill' element={<PayBillScreen/>} />
            <Route path='/water-searchPayList' element={<SearchPayList/>} />
            <Route path='/water-payNow' element={<PayNowScreen/>} />
            <Route path='/water-confirmPayment' element={<MakePayment/>} />
            <Route path='/water-paymentSuccess' element={<SuccessPaymentScreen/>} />
            <Route path='/water-pastPayment' element={<PastPaymentScreen/>} />
            
        </Routes>
    )
}

export default WaterRoutes