import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className=' hover:scale-105 transition-transform duration-800'>
      <div className='flex flex-row lg:flex-col'>
        <div className='mx-8'>
          <img src={props.image} alt="item" />
          <p className='my-4 text-white'>{props.name}</p>
          <div className='flex gap-5'>
              <div className="text-gray-700 text-lg font-semibold">
                  ${props.new_price}
              </div>
              <div className="text-gray-500 text-lg font-medium line-through">
                  ${props.old_price}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
