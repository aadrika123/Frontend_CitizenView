import React from 'react'
import { Link } from 'react-router-dom'
import newapply from '../../../Images/newapply.png';
import renewal from '../../../Images/renewal.png';
import amendment from '../../../Images/amendment.png';
import surrender from '../../../Images/surrender.png';

function WaterMenuList() {
    
    const imgStyle = "h-10 w-10";
    return (
        <>
           

            <div className='mt-4 text-base text-gray-500 font-semibold mx-2'>
                <h1 className='font-bold text-lg text-slate-500 my-2'>Water ...</h1>

                <p className='px-2 mt-1 shadow-md  py-2 cursor-pointer rounded-md hover:bg-gray-50 hover:scale-105 flex justify-between'>
                    <Link to="/water-applyNew">Apply For Water Connection</Link>
                    <img src={newapply} alt="" title='NEW APPLICATION' className={`${imgStyle}`} />
                </p>
                <p className='px-2 mt-1 shadow-md  py-2 cursor-pointer rounded-md hover:bg-gray-50 hover:scale-105  flex justify-between'>
                    <Link to="/water-index">Primary Water Utitlites</Link>
                    <img src={renewal} alt="" title='NEW APPLICATION' className={`${imgStyle}`} />
                </p>
                <p className='px-2 mt-1 shadow-md  py-2 cursor-pointer rounded-md hover:bg-gray-50 hover:scale-105  flex justify-between'>
                    <Link to="/">Search and Pay Water Tax</Link>
                    <img src={amendment} alt="" title='NEW APPLICATION' className={`${imgStyle}`} />
                </p>


            </div>
        </>
    )
}

export default WaterMenuList