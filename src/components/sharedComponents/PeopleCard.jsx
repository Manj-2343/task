import React from 'react'

const PeopleCard = ({id,name,img}) => {
  return (
    <div className='relative'>
        <img className='h-[350px]' src={img} alt="" />
        <p className='bg-white absolute bottom-3 left-5 text-black px-8 py-2'>{name}</p>
    </div>
  )
}

export default PeopleCard