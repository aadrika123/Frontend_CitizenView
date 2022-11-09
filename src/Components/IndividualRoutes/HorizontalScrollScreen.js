import React from 'react';
import HorizontalScroll from 'react-horizontal-scrolling'
import property from '../../Images/property.png'
import water from '../../Images/water.png'
import trade from '../../Images/trade.png'
import grievance from '../../Images/grievance.png'

function HorizontalScrollScreen(props) {
  return (
    <>
      <div className='w-full mt-0 md:ml-10 pt-5 h-28 mx-auto'>
        <HorizontalScroll>
          <div className='h-24 w-28 border text-center m-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-200' onClick={() => props.setShowModuleFun('PROPERTY')}>
            <img src={property} alt="" className='h-12 w-12 ml-8 my-1' />
            <p className='font-bold text-stone-600 py-1'>PROPERTY </p>
          </div>
          <div className='h-24 w-28 border text-center m-2 rounded-lg shadow-md  cursor-pointer hover:bg-gray-200' onClick={() => props.setShowModuleFun('TRADE')}>
            <img src={trade} alt="" className='h-12 w-12 ml-8 my-1' />
            <p className='font-bold text-stone-600 py-1'>TRADE </p>
          </div>
          <div className='h-24 w-28 border text-center m-2 rounded-lg shadow-md  cursor-pointer hover:bg-gray-200' onClick={() => props.setShowModuleFun('WATER')}>
            <img src={water} alt="" className='h-12 w-12 ml-8 my-1' />
            <p className='font-bold text-stone-600 py-1'>WATER </p>
          </div>
          <div className='h-24 w-28 border text-center m-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 active:bg-gray-200' onClick={() => props.setShowModuleFun('GRIEVANCES')}>
            <img src={grievance} alt="" className='h-12 w-12 ml-8 my-1' />
            <p className='font-bold text-stone-600 py-1'>GRIEVANCES </p>
          </div>

        </HorizontalScroll>
      </div>
    </>
  )
}

export default HorizontalScrollScreen