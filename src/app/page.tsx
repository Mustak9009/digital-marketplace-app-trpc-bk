import React from 'react'
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { buttonVariants, Button } from "@/components/ui/button";
import { ArrowDownToLine, ArrowRight, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";
const PERKS = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description:
      'Get your assets delivered to your email in seconds and download them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
  },
  {
    name: 'For the Planet',
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
]
export default function Home() {
  return (
    <React.Fragment>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-20">
          <section>
            <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
              Your marketplace for high-quality{" "}
              <span className="text-blue-600">Digital Assets</span>.
            </h1>
            <p className="text-lg max-w-proset text-muted-foreground mt-6">
              Welcome to DigitalHippo. Every assets on your platform is verified
              by our team to ensurre higher qulity standards.
            </p>
          </section>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/product"} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button
              variant={"outline"}
              className="flex items-center justify-center gap-2"
            >
              <span>Our qulity promise</span>
              <ArrowRight size={15} />
            </Button>
          </div>
        </div>
        {/* TODO: Add list of products */}
      </MaxWidthWrapper>
      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {PERKS.map((perk)=>(
              <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'  >
                <div className='flex justify-center md:flex-shrink-0'>
                  <div className='flex items-center justify-center size-16 rounded-full bg-blue-100'>
                    <perk.Icon className='size-1/3'/>
                  </div>
                </div>
                <section className='mt-6 md:mt-0 md:ml-4 lg:ml-0 lg:mt-6'>
                  <h2 className='font-medium text-base text-gray-900'>
                    {perk.name}
                  </h2>
                  <p className='text-sm mt-3 text-muted-foreground'>
                    {perk.description}
                  </p>
                </section>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </React.Fragment>
  );
}
