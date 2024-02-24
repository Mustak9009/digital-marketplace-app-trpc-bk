'use client'

import React, { useState,useRef, useEffect } from 'react'
import {PRODUCT_CATEGORIES} from '@/config/index.config';
import NavItem from '@/components/NavItem.component';
import {useOnClickOutside} from '@/hooks/useOnClickOutlise.hook';
export default function NavItems() {
  const [activeIndex,setActiveIndex] = useState<null | number>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref,()=>setActiveIndex(null))
  const isAnyOpen = activeIndex !== null;
  useEffect(()=>{
    const handler = (e:KeyboardEvent) =>{
      if(e.key === 'Escape'){
        setActiveIndex(null)
      }
      if(e.key === 'ArrowRight'){
        setActiveIndex(1)
      }else if(e.key === 'ArrowLeft'){
        setActiveIndex(0)
      }
    }
    document.addEventListener('keydown',handler)  
    return ()=>{
      document.removeEventListener('keydown',handler)
    }
  },[])
  return (
    <div className='flex gap-4 h-full' ref={ref}>
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
