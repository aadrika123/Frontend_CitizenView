import React, { useContext, useEffect, useState } from 'react'
import CommonStyles from './CommonStyles'

import { Link, useParams } from 'react-router-dom';
import BottomNavigation from './BottomNavigation'
import HorizontalScrollScreen from './HorizontalScrollScreen'
import PropertyMenuList from './MenuList/PropertyMenuList'
import TradeMenuList from './MenuList/TradeMenuList'
import WaterMenuList from './MenuList/WaterMenuList'
import GrievancMenuList from './MenuList/GrievancMenuList'
import InitialMenuList from './MenuList/InitialMenuList'
import TopBlock from './TopBlock';
import { contextVar } from '../GlobalState/ContextVar';
import HorizontalNew from './HorizontalNew';


function IndividualRoutes() {
    const child = { width: `300em`, height: `100%` }
    const { container, boxStyle } = CommonStyles();
    const [showModule, setShowModule] = useState('INITIAL');

    // const globalData = useContext(contextVar);
    // useEffect(() => {
    //     globalData.setModule('JUIDCO')
    // }, [])




    return (
        <div className={`${container}`}>

            {/* <div className={`${boxStyle}`}>
                <div className="flex justify-between  py-2">
                    <h1 className="font-bold text-2xl text-stone-600 px-2">PROPERTY</h1>
                    <img src={property} alt="property" className='h-12 w-12 mr-2' />
                </div>
                <div className='mt-4 text-lg text-orange-500 font-semibold text-md'>
                    <p className='px-2 '>
                        <Link to="/property-citizen-form">Apply for New SAF</Link>
                    </p>
                    <p className='px-2 '>
                        <Link to="/property-citizen-form">Apply for Mutation</Link>
                    </p>
                    <p className='px-2 '>
                        <Link to="/property-citizen-form">Search and Pay Property Tax</Link>
                    </p>
                </div>
            </div>

            <div className={`${boxStyle}`}>
                <div className="flex justify-between  py-2">
                    <h1 className="font-bold text-2xl text-stone-600 px-2">TRADE</h1>
                    <img src={trade} alt="property" className='h-12 w-12 mr-2' />
                </div>
                <div className='mt-4 text-lg text-orange-500 font-semibold text-md'>
                    <p className='px-2 '>
                        <Link to="/trade-index">Apply for New Application</Link>
                    </p>
                    <p className='px-2 '>
                        <Link to="/">Renew Your License</Link>
                    </p>
                    <p className='px-2'>
                        <Link to="/">Track Application Status</Link>
                    </p>
                </div>
            </div>


            <div className={`${boxStyle}`}>
                <div className="flex justify-between  py-2">
                    <h1 className="font-bold text-2xl text-stone-600 px-2">WATER & SEWERAGE</h1>
                    <img src={water} alt="property" className='h-12 w-12 mr-2' />
                </div>
                <div className='mt-4 text-lg text-orange-500 font-semibold text-md'>

                    <p className='px-2 '>
                        <Link to="/water-applyNew">Apply For Water Connection</Link>
                    </p>

                    <p className='px-2  '>
                        <Link to="/water-index">Primary Water Utitlites</Link>
                    </p>

                    <p className='px-2 '>
                        <Link to="/">Search and Pay Water Tax</Link>
                    </p>
                </div>
            </div>


            <div className={`${boxStyle}`}>
                <div className="flex justify-between  py-2">
                    <h1 className="font-bold text-2xl text-stone-600 px-2">GRIEVANCE REDRESSAL</h1>
                    <img src={grievance} alt="property" className='h-12 w-12 mr-2' />
                </div>
                <div className='mt-4 text-lg text-orange-500 font-semibold text-md'>

                    <p className='px-2'>
                        <Link to="/grievance-index">Lodge a Complain</Link>
                    </p>

                    <p className='px-2'>
                        <Link to="/">Track Your Grievance status</Link>
                    </p>

                </div>
            </div> */}

            {/* <TopBlock /> */}

            <HorizontalScrollScreen showModule={showModule} setShowModuleFun={setShowModule} />

            {/* <HorizontalNew /> */}

            <div className='bg-white my-auto h-64 md:h-80 overflow-auto mt-4'>
                {showModule == 'INITIAL' && <> <InitialMenuList />    </>}
                {showModule == 'PROPERTY' && <> <PropertyMenuList />   </>}
                {showModule == 'TRADE' && <> <TradeMenuList />      </>}
                {showModule == 'WATER' && <> <WaterMenuList />      </>}
                {showModule == 'GRIEVANCES' && <> <GrievancMenuList />   </>}
            </div>

            {/* Bottom Navigation */}
            {/* <BottomNavigation showModule={showModule} setShowModuleFun={setShowModule} /> */}
        </div>
    )
}

export default IndividualRoutes