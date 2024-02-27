'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from './ui/sheet';
import {Link as LinkIcon, ShoppingCart} from 'lucide-react';
import { Separator } from './ui/separator';
import {formatPrice} from '@/lib/utils'
import { buttonVariants } from './ui/button';
export default function Cart() {
  const itemCount = 0;
  const fee = "293";
  return (
    <Sheet>
      <SheetTrigger className='flex items-center -m-2 p-2 group'>
        <ShoppingCart aria-label='Cart' className='flex-shrink-0 text-gray-400 size-6 group-hover:text-gray-500'/>
        <span className='font-medium text-sm text-gray-700 group-hover:text-gray-800 ml-2'>0</span>
      </SheetTrigger>
      <SheetContent className='flex flex-col w-full sm:max-w-sm pr-6'>
        <SheetHeader className='space-y-2.5'>
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className='flex flex-col w-full'>
              {/* TODO: Cart logic */}
              Cart itmes 
            </div>
            <div className='space-y-4'>
              <Separator/>
              <div className='space-y-1.5 text-sm'>
                <div className='flex justify-between'>
                  <span className='flex-1'>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='flex justify-between'>
                  <span className='flex-1'>Transaction Fee</span>
                  <span>{formatPrice(fee,{currency:"INR"})}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='flex-1'>Total</span>
                  <span>{formatPrice(fee,{currency:"INR"})}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link href={'/cart'} className={buttonVariants({className:'w-full'})}>
                    Continue to Checkout
                    <LinkIcon size={15}  aria-hidden/>
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className='flex flex-col h-full items-center justify-center space-y-1'>
            <div className='relative mb-4 size-60 text-muted-foreground'> 
              <Image src={'/hippo-empty-cart.png'} alt='Hippo empty shopping cart ..!!' fill aria-hidden/>
            </div>
            <p className='text-xl font-semibold'>Your cart is empty 😥</p>
            <SheetTrigger asChild>
              <Link href={'/product'} className={buttonVariants({variant:'link',size:"sm",className:'text-sm text-blue-500'})}>
               Add items to cart . . .
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
