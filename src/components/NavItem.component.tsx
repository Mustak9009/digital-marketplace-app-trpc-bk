import React from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "@/config/index.config";
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import Image from 'next/image'
import Link from 'next/link'
interface NavItemPropsType {
  category: (typeof PRODUCT_CATEGORIES)[number];
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}
export default function NavItem({category,handleOpen,isOpen,isAnyOpen}: NavItemPropsType) {
  return (
    <div className="flex">
      <div className="flex items-center relative">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown className={cn("size-4 transition-transform text-muted-foreground",{
            'rotate-180':isOpen
          })}/>
        </Button>
      </div>
      {isOpen ? (
        <div className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground",{
          "animate-in fade-in-10 slide-in-from-top-5":!isOpen //The tailwind class comes from -> tailwindcss-animate package
        })}>
          <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden={true}/>
          <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-4 gap-x-4 gap-y-8 py-16">
                <div className="grid grid-cols-3 gap-x-8 col-span-4 col-start-1">
                  {category.featured.map((item)=>(
                    <div key={item.name} className="relative text-base sm:text-sm group">
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <Image src={item.imageSrc} alt={item.name} className="object-cover object-center" fill/>
                      </div>
                      <Link href={item.href} className="font-medium text-gray-900 block mt-6">
                        {item.name}
                      </Link>
                      <p aria-hidden={true}>Shop now</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
