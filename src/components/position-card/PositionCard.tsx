import React from 'react';
import {Card} from "@/components/ui/card";
import Image from "next/image";

interface PositionCardProps {
    name: string
    img: string
}

const PositionCard = (props: PositionCardProps) => {
    const {name, img} = props;
    return (
        <Card
            className="flex items-center gap-2 font-pixellari bg-dark text-web-white font-medium rounded-2xl p-4 border-none h-20 uppercase">
            <Image className="bg-dark-gray rounded-[8px] p-2" src={img} width={50} height={50} alt="logo"/>
            {name}
        </Card>
    );
};

export default PositionCard;