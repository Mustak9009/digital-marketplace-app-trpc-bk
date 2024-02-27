import React, { use } from "react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./Icons.component";
import NavItems from "./NavItems.component";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart.component";
const DividerUI = ()=>{
    return(
        <span className="bg-gray-200 h-7 w-px" aria-hidden/> //w-px = 1px
    )
}
export default function NavBar() {
  const user = null;
  return (
    <div className="sticky top-0 bg-white z-50 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              {/* TODO: Mobile nav */}
              <div className="flex ml-4 lg:ml-0">
                <Link href={"/"}>
                  <Icons.logo className="size-10" />
                </Link>
              </div>
              <div className="hidden lg:block lg:ml-8 lg:self-stretch">
                <NavItems />
              </div>
              <div className="flex items-center ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {!user ? (
                    <Link href={"/sign-up"} className={buttonVariants({ variant: "ghost" })}>
                      Create a account
                    </Link>
                  ) : (
                    <span>User</span>
                  )}
                  {!user ? (
                    <DividerUI/>
                  ) : null}
                  {!user ? (
                    <Link href={"/sign-in"} className={buttonVariants()}>
                      Sign in
                    </Link>
                  ) : null}
                  {!user ? (
                    <DividerUI/>
                  ) : null}
                  {user ? (
                    <div className="flex lg:ml-6">
                        <DividerUI/>
                    </div>
                  ) : null}    
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
