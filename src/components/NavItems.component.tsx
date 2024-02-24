'use client'

import React, { useState } from 'react'
import {PRODUCT_CATEGORIES} from '@/config/index.config';
import NavItem from '@/components/NavItem.component';
export default function NavItems() {
  const [activeIndex,setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;
  return (
    <div className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((category,index)=>{
        const handleOpen = ()=>{
          if(activeIndex===index){ //Give double click functionality
            setActiveIndex(null);
          }else{
            setActiveIndex(index)
          }
        }
        const isOpen = index === activeIndex; 
        return(
          <NavItem key={category.value} {...{category,handleOpen,isOpen,isAnyOpen}}/>
        )
      })}
    </div>
  )
}
