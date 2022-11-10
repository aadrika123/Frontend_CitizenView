import React from 'react'

function FeedbackScreen(props) {

    const data = props?.payloadData;

    // console.log("Data in FeedbackForm", data)

    return (
        <>
            {
                data && <div className='bg-red-100 m-2 p-2 mb-10 shadow-md rounded-md'>
                    <div className="w-full md:w-1/3">
                        <h1 className="text-center font-bold text-xl">Form Details</h1>
                        <div className='text-gray-800 text-base leading-6'>
                            {data?.isResidential && <p className="">Is this a Residential Property? <span className='font-semibold'>{data?.isResidential}</span></p>}
                            {data?.propertyType && <p className="">Type of Property <span className='font-semibold'>{data?.propertyType}</span></p>}
                            {data?.areaOfPlot && <p>Plot Size <span className='font-semibold'>{data?.areaOfPlot}</span></p>}
                            {data?.numberOfBasements && <p>Number of Basements <span className='font-semibold'>{data?.numberOfBasements}</span> </p>}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default FeedbackScreen