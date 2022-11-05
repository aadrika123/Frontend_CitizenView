import React from 'react'
import services from '../../Images/services.png'
import user from '../../Images/user.png'
import logout from '../../Images/logout.png'
import news from '../../Images/news.png'
import home from '../../Images/home.png'
import notification from '../../Images/notification.png'
import { Link } from 'react-router-dom'

function BottomNavigation(props) {
    return (
        <div className='w-full md:w-1/3 lg:1/3 md:mx-auto lg:mx-auto fixed bottom-0 h-16 flex justify-evenly shadow bg-white'>
            <div className=' hover:bg-stone-100' onClick={()=>{props.setShowModuleFun('INITIAL')}}>
                <img src={home} alt="" className='ml-2 h-8 w-8' title='HOME' />
                <p className='font-bold'><Link to="/">Home</Link> </p>
            </div>
            <div className=' hover:bg-stone-100'>
                <img src={notification} alt="" className='ml-4 h-8 w-8' title='NOTIFICATION' />
                <p className='font-bold'> <Link to="/">Ntfcn...</Link> </p>
            </div>
            <div className=' hover:bg-stone-100'>
                <img src={user} alt="" className='ml-2 h-8 w-8' title='PROFILE' />
                <p className='font-bold'><Link to="/">Profile</Link></p>
            </div>
            <div className=' hover:bg-stone-100'>
                <img src={logout} alt="" className='ml-2 h-8 w-8' title='LOGOUT' />
                <p className='font-bold'><Link to="/">Logout</Link></p>
            </div>
        </div>
    )
}

export default BottomNavigation