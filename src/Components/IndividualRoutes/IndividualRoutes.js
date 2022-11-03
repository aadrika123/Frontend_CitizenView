import React, { useState } from 'react'
import CommonStyles from './CommonStyles'
import property from '../../Images/property.png'
import water from '../../Images/water.png'
import trade from '../../Images/trade.png'
import grievance from '../../Images/grievance.png'
import home from '../../Images/home.png'
import logo from '../../Images/logo.png'
import news from '../../Images/news.png'



import { Link } from 'react-router-dom';
import HorizontalScroll from 'react-horizontal-scrolling'
import BottomNavigation from './BottomNavigation'


function IndividualRoutes() {
    const child = { width: `300em`, height: `100%` }
    const { container, boxStyle } = CommonStyles();
    const [showModule, setShowModule] = useState('INITIAL');

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

            <div className='w-full h-48 flex px-2 pt-4 border border-gray-600 justify-between' style={{ backgroundImage: `url('https://i.pinimg.com/originals/2b/bd/ad/2bbdad1ecd367937b87afe48b7fd0c13.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='h-48 w-48 p-1'>
                    <img src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" alt="" className='h-24 w-24 rounded-lg border border-gray-600' />
                    <strong className=' text-stone-800 font-bold text-lg'>John Doe</strong>
                    <p className=' text-stone-200 font-semibold'>Trade Tax Collector</p>
                </div>
                <div className='h-48 w-24 p-1 rounded-lg text-stone-200'>
                    {/* <img src={trade} alt="" srcset="" className='h-24 w-24 ' />
                    <strong>John Doe</strong>
                    <p>Trade Tax Collector</p> */}

                    <img src={logo} alt="" className='h-16 w-16' title='JHARKHAND URBAN INFRASTRUCTURE DEVELOPMENT COMPANY' />
                    <p className='font-bold'>JUIDCO</p>

                </div>
            </div>

            <div className='w-full mt-4 h-28 '>
                <HorizontalScroll>
                    <div className='h-24 w-28 border text-center m-2 rounded-lg shadow-md' onClick={() => setShowModule('PROPERTY')}>
                        <img src={property} alt="" className='h-12 w-12 ml-8' />
                        <p className='font-bold text-stone-600 py-1'>PROPERTY </p>
                    </div>
                    <div className='h-24 w-28 border text-center m-2 rounded-lg shadow-md ' onClick={() => setShowModule('TRADE')}>
                        <img src={trade} alt="" className='h-12 w-12 ml-8' />
                        <p className='font-bold text-stone-600 py-1'>TRADE </p>
                    </div>
                    <div className='h-24 w-28 border text-center m-2 rounded-lg shadow-md ' onClick={() => setShowModule('WATER')}>
                        <img src={water} alt="" className='h-12 w-12 ml-8' />
                        <p className='font-bold text-stone-600 py-1'>WATER </p>
                    </div>
                    <div className='h-24 w-28 border text-center m-2 rounded-lg shadow-md' onClick={() => setShowModule('GRIEVANCES')}>
                        <img src={grievance} alt="" className='h-12 w-12 ml-8' />
                        <p className='font-bold text-stone-600 py-1'>GRIEVANCES </p>
                    </div>

                </HorizontalScroll>
            </div>

            <div className='bg-white my-auto'>

                {
                    showModule == 'INITIAL' && <>

                        <div className='w-full mt-4 px-4 text-xs '>
                            <h1 className='font-bold text-xl text-slate-500 my-2'>...</h1>
                            <div className='grid grid-cols-4  justify-between gap-0 ' >
                                <div className='col-span-1 text-center rounded-md shadow-lg '>
                                    <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-500 to-purple-500'>2</h1>
                                </div>
                                <div className='col-span-3 shadow-lg px-2 text-stone-500'>
                                    <p><strong> Total Pending Applications</strong></p>
                                    <p><small> You have 2 pending Applications.</small></p>
                                    <small className='float-right font-bold pt-2'>04 November 2022.</small>
                                </div>
                            </div>
                            <div className='grid grid-cols-4  justify-between gap-0 mt-4'>
                                <div className='col-span-1 text-center rounded-md shadow-lg '>
                                    <h1 className='text-6xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>3</h1>
                                </div>
                                <div className='col-span-3 shadow-lg px-2 text-stone-500'>
                                    <p><strong> Total Due Applications</strong></p>
                                    <p><small>You Applications need action.</small></p>
                                    <small className='float-right font-bold pt-2'>04 November 2022.</small>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {
                    showModule == 'PROPERTY' && <>

                        <div className='w-full mt-4 px-2 pb-2 '>
                            <div className='mt-4 text-lg text-teal-500 font-semibold text-md'>
                                <p className='px-2 mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                    <Link to="/property-citizen-form">Apply for New SAF</Link>
                                </p>
                                <p className='px-2  mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                    <Link to="/property-citizen-form">Apply for Mutation</Link>
                                </p>
                                <p className='px-2  mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                    <Link to="/property-citizen-form">Search and Pay Property Tax</Link>
                                </p>
                            </div>
                        </div>
                    </>
                }
                {
                    showModule == 'TRADE' && <>

                        <div className='mt-4 text-lg text-purple-500 font-semibold text-md'>
                            <p className='px-2 mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                <Link to="/trade-index">Apply for New Application</Link>
                            </p>
                            <p className='px-2 mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                <Link to="/">Renew Your License</Link>
                            </p>
                            <p className='px-2 mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                <Link to="/">Track Application Status</Link>
                            </p>
                        </div>
                    </>
                }
                {
                    showModule == 'WATER' && <>

                        <div className='mt-4 text-lg text-sky-500 font-semibold text-md'>

                            <p className='px-2 mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                <Link to="/water-applyNew">Apply For Water Connection</Link>
                            </p>

                            <p className='px-2  mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                <Link to="/water-index">Primary Water Utitlites</Link>
                            </p>

                            <p className='px-2  mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                <Link to="/">Search and Pay Water Tax</Link>
                            </p>
                        </div>
                    </>
                }
                {
                    showModule == 'GRIEVANCES' && <>

                        <div className='w-full mt-4'>
                            <div className='mt-4 text-lg text-orange-500 font-semibold text-md'>
                                <p className='px-2 mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                    <Link to="/grievance-index">Lodge a Complain</Link>
                                </p>
                                <p className='px-2 mt-1 shadow-md py-2 rounded-md hover:bg-gray-50 hover:scale-105'>
                                    <Link to="/">Track Your Grievance status</Link>
                                </p>

                            </div>
                        </div>
                    </>
                }
            </div>

            {/* Bottom Navigation */}
            <BottomNavigation showModule={showModule} setShowModuleFun={setShowModule} />
        </div>
    )
}

export default IndividualRoutes