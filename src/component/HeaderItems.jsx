import React from 'react'

const HeaderItems = ({name,Icon}) => {
  return (
    <div className='text-white flex items-center mt-4 text-base cursor-pointer font-semibold hover:underline underline-offset-8'>
        <Icon/>
        <span className='pl-2'>{name}</span>
    </div>
  )
}

export default HeaderItems