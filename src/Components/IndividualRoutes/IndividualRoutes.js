import React from 'react'
import CommonStyles from './CommonStyles'
import property from '../../Images/property.png'
import water from '../../Images/water.png'
import trade from '../../Images/trade.png'
import grievance from '../../Images/grievance.png'
import { Link } from 'react-router-dom';

function IndividualRoutes() {
    const { container, boxStyle } = CommonStyles();
    return (
        <div className={`${container}`}>

            <div className={`${boxStyle}`}>
                <div className="flex justify-between  py-2">
                    <h1 className="font-bold text-2xl text-stone-600 px-2">PROPERTY</h1>
                    <img src={property} alt="property" className='h-12 w-12 mr-2' />
                </div>
                <div className='mt-4 text-lg'>
                    <p className='px-2 text-orange-500 font-semibold text-md'>
                        <Link to="/property-citizen-form">Apply for New SAF</Link>
                    </p>
                    <p className='px-2 text-orange-500 font-semibold text-md'>
                        <Link to="/property-citizen-form">Apply for Mutation</Link>
                    </p>
                    <p className='px-2 text-orange-500 font-semibold text-md'>
                        <Link to="/property-citizen-form">Search and Pay Property Tax</Link>
                    </p>
                </div>
            </div>

            <div className={`${boxStyle}`}>
                <div className="flex justify-between  py-2">
                    <h1 className="font-bold text-2xl text-stone-600 px-2">TRADE</h1>
                    <img src={trade} alt="property" className='h-12 w-12 mr-2' />
                </div>
                <div className='mt-4 text-lg'>
                    <p className='px-2 text-orange-500 font-semibold text-md'>
                        <Link to="/trade-index">Apply for New Application</Link>
                    </p>
                    <p className='px-2 text-orange-500 font-semibold text-md'>
                        <Link to="/">Renew Your License</Link>
                    </p>
                    <p className='px-2 text-orange-500 font-semibold text-md'>
                        <Link to="/">Track Application Status</Link>
                    </p>
                </div>
            </div>


            <div className={`${boxStyle}`}>
                <div className="flex justify-between  py-2">
                    <h1 className="font-bold text-2xl text-stone-600 px-2">WATER & SEWERAGE</h1>
                    <img src={water} alt="property" className='h-12 w-12 mr-2' />
                </div>
                <div className='mt-4 text-lg'>

                    <p className='px-2 text-orange-500 font-semibold text-md'>
                        <Link to="/water-applyNew">Apply For Water Connection</Link>
                    </p>

                    <p className='px-2 text-orange-500 font-semibold '>
                        <Link to="/water-index">Primary Water Utitlites</Link>
                    </p>

                    <p className='px-2 text-orange-500 font-semibold text-md'>
                        <Link to="/">Search and Pay Water Tax</Link>
                    </p>
                </div>
            </div>


            <div className={`${boxStyle}`}>
                <div className="flex justify-between  py-2">
                    <h1 className="font-bold text-2xl text-stone-600 px-2">GRIEVANCE REDRESSAL</h1>
                    <img src={grievance} alt="property" className='h-12 w-12 mr-2' />
                </div>
                <div className='mt-4 text-lg'>

                    <p className='px-2 text-orange-500 font-semibold text-md'>
                        <Link to="/grievance-index">Lodge a Complain</Link>
                    </p>

                    <p className='px-2 text-orange-500 font-semibold '>
                        <Link to="/">Track Your Grievance status</Link>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default IndividualRoutes