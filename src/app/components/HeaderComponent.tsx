"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { SheetSlider } from './SheetSlider';
import { ModeToggle } from '@/components/ModeToggle'; // Assuming this import is correct
import { listItem } from '@/constraints/data';

const HeaderComponent = () => {
  const [logo, setLogo] = useState('/LightLogo.png');
  const { theme } = useTheme();

  useEffect(() => {
    setLogo(theme === 'dark' ? '/DarkLogo.png' : '/LightLogo.png');
  }, [theme]);

  return (
    <div className="bg-white shadow fixed w-full top-0 dark:bg-black font-bold p-3 px-4 md:px-6 flex justify-between flex-row items-center">
      <div className="lg:hidden md:flex">
        <div className="flex items-center gap-3 md:gap-10">
          <SheetSlider />
          <Image src={logo} width={600} height={600} alt="Logo" className="w-16 md:w-20 lg:w-24" />
        </div>
      </div>
      <div className="lg:flex hidden">
        <Image src={logo} width={600} height={600} alt="Logo" className="w-16 md:w-20 lg:w-24" />
      </div>
      <ul className="lg:flex hidden justify-between gap-20 sm:text-sm md:text-base lg:text-base">
        {
          listItem.map((data:string,i:number)=>(
            <li key={i}>{data}</li>
          ))
        }
      </ul>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default HeaderComponent;
