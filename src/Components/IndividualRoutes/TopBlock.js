import React from 'react'
import logo from '../../Images/logo.png'

function TopBlock() {
    return (
        <>
            <div className='w-full h-48 flex px-2 pt-4 border border-gray-100 justify-between' style={{ backgroundImage: `url('https://th.bing.com/th/id/R.0a5296708c2ceec8dcbbda5db2822aa0?rik=nc1xKGHWhVyE7A&riu=http%3a%2f%2fwww.powerpointstemplate.com%2fwp-content%2fuploads%2f2017%2f05%2fslide-professional-simple-free-ppt-backgrounds.jpg&ehk=m2MDMY2s9kDl5by3RXHaHBEgaQfp9McvFtdMYcNhcgI%3d&risl=&pid=ImgRaw&r=0')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='h-48 w-48 p-1'>
                    <img src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" alt="" className='h-24 w-24 rounded-lg border border-gray-600' />
                    <strong className=' text-stone-800 font-bold text-lg'>John Doe</strong>
                    <p className=' text-stone-100 font-semibold'>Trade Tax Collector</p>
                </div>
                <div className='h-48 w-24 p-1 rounded-lg text-stone-200'>
                    <img src={logo} alt="" className='h-16 w-16' title='JHARKHAND URBAN INFRASTRUCTURE DEVELOPMENT COMPANY' />
                    <p className='font-bold'>JUIDCO</p>

                </div>
            </div>
        </>
    )
}

export default TopBlock