'use client'

import React, { useState } from 'react'
import {PRODUCT_CATEGORIES} from '@/config/index.config';
import NavItem from '@/components/NavItem.component';
export default function NavItems() {
  const [activeIndex,setActiveIndex] = useState<null | number>(null);
  return (
    <div className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((categori,index)=>{
        const handleOpen = ()=>{
          if(activeIndex===index) setActiveIndex(null);
          setActiveIndex(index)
        }
        const isOpen = index === activeIndex; 
        return(
          <NavItem/>
        )
      })}
    </div>
  )
}
