import React from 'react'
import './Popular.css'
import data_product from '../../assets/data'
import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-10 h-[90vh]'>
        <h1 className="text-4xl text-gray-700 mt-10 font-semibold">POPULAR IN WOMEN</h1>
        <hr className='w-[300px] h-[6px] rounded-lg bg-gray-900'/>
        <div className="mt-12 flex gap-8">
            {data_product.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
            })}
        </div>
    </div>
  )
}