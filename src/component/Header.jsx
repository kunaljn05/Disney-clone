import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from 'react-icons/hi2'
import { HiPlus,HiDotsVertical } from 'react-icons/hi'
import profile from '../assets/images/profile.png'
import HeaderItems from './HeaderItems'
const Header = () => {
  const[toggle,setToggle] = useState(false);
  const menu = [
    {
      name : 'HOME',
      icon : HiHome
    },
    {
      name : 'SEARCH',
      icon : HiMagnifyingGlass
    },
    {
      name : 'WATCH LIST',
      icon : HiPlus
    },
    {
      name : 'ORIGINALS',
      icon : HiStar
    },
    {
      name : 'MOVIES',
      icon : HiPlayCircle
    },
    {
      name : 'SERIES',
      icon : HiTv
    }
  ]
  return (
    <div className='flex  items-center justify-between'>
     <div className='flex items-center gap-8'>
     <img src={logo} className=' object-cover md:w-[115px] py-5 w-[80px]' />
      <div className='hidden md:flex gap-8'>
      {menu.map((el)=>{
      console.log("HI")
      return <HeaderItems name={el.name} Icon={el.icon}/> 
    })}
      </div>
      <div className='md:hidden flex items-center gap-8'>
      {menu.map((el,index)=>index<3 && (
       <HeaderItems name={''} Icon={el.icon}/> 
    ))}
      </div>
      <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
        <HeaderItems name={''} Icon={HiDotsVertical} />
        {toggle ? (<div className='absolute bg-[#121212] border-[1px] border-gray-700 p-5 mt-3 ml-3'>
        {menu.map((el,index)=>index>2 && (
       <HeaderItems name={el.name} Icon={el.icon}/> 
    ))}
        </div>):null}
      </div>
     </div>
     <img src={profile} className='w-[80px] h-[80px] p-5 m-2'/>
    </div>
  )
}

export default Header