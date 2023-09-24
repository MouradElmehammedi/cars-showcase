"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => { 
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className='w-full  absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/hero.png'
            alt='logo'
            width={60}
            height={18}
            className='object-contain'
          />
          <span className="ml-1 font-extrabold text-2xl font-sans text-gray-800">CarQuest</span>
        </Link>

        <CustomButton
          title="Explore Cars"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={handleScroll}
        />

      </nav>
    </header>
  );
}
export default NavBar;
