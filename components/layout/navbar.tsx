"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import {Button, Heading} from "@radix-ui/themes";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-x-3 font-display text-2xl">
            <svg className='h-8 w-8'  viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="640" height="640" rx="320" fill="#010101"/>
              <g clip-path="url(#clip0_972_130)">
                <path d="M300.888 190L470.763 359.188V450.015H391.488V391.839L268.106 268.954H242.475V450.015H163.2V190H300.888ZM391.488 280.234V190H470.763V280.234H391.488Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_972_130">
                  <rect width="313.2" height="265.015" fill="white" transform="translate(163.2 187.5)"/>
                </clipPath>
              </defs>
            </svg>
            <Heading>Entry</Heading>
          </Link>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <Button
                size='3'
                className="rdx-rounded-full"
                // variant='outline'
                highContrast
                color='gray'
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
