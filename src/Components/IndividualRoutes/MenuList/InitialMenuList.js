import React from 'react'

function InitialMenuList() {
    return (
        <>
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
    )
}

export default InitialMenuList