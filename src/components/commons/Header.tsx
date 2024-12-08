import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";

const Header = () => {
    return (
        <div
            className="bg-dark-gray text-white flex justify-between items-center font-bold text-2xl h-[77px] rounded-[8px] px-4 py-[18px]">
            <div className="flex gap-2">
                <Image src="/logo.svg" width={50} height={50} alt="logo"/>
                <Image src="/logo-tipography.svg" width={115} height={5} alt="logo-tipography"
                />
            </div>
            <div className="flex gap-2">
                <Image src="/coin.svg" width={30} height={30} alt="logo"/>
                <Image src="/coin.svg" width={30} height={30} alt="logo"/>
                <Image src="/coin.svg" width={30} height={30} alt="logo"/>
                <Image src="/coin.svg" width={30} height={30} alt="logo"/>
                <Image src="/coin.svg" width={30} height={30} alt="logo"/>
                <Button size="lg">SIGN UP</Button>
            </div>
        </div>
    );
};

export default Header;