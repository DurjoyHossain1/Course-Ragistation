import React from 'react'

const Cart = ({titels}) => {
  return (
    <div className='md:ml-8 md:w-[312px]  bg-[#f3f3f3] p-6 rounded-md min-h-[10vh]'>
        <h1 className='mb-4 text-xl font-bold text-[#2F80ED]'>Credit Hour Remaining {titels.length} hr</h1>
        <hr className='mb-5 mt-5' />
        <div>
            <h2 className='text-[#1C1B1B] font-bold text-2xl'>Course Name</h2>

            <ul className='mt-5'>
               {titels.map((title,index) => <li key={index}> {index}  {title.title}</li>)}
            </ul>
            <hr className='my-5'/>
        </div>
        <h1>Total Credit Hour : {titels.reduce((p,c) => p + c.time  ,0)} hr</h1>
        <hr  className='my-5'/>
        <h1>Total Price : <span>{titels.reduce((price,currentPrice) => price + currentPrice.price ,0)}</span> USD</h1>
    </div>
  )
}

export default Cart