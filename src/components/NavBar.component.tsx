import React from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import  Link from 'next/link'
import {Icons} from './Icons.component';
import NavItems from './NavItems.component';
export default function NavBar() {
  return (
    <div className='sticky top-0 bg-white z-50 inset-x-0 h-16'>
        <header className='relative bg-white'>
            <MaxWidthWrapper>
                <div className='border-b border-gray-200'>
                    <div className='flex items-center h-16'>
                        {/* TODO: Mobile nav */}
                        <div className='flex ml-4 lg:ml-0'>
                            <Link href={'/'}>
                                <Icons.logo className='size-10'/>
                            </Link>
                        </div>
                        <div className='hidden lg:block lg:ml-8 lg:self-stretch'>
                            <NavItems/>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </header>
    </div>
  )
}
