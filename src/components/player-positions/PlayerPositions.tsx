import React from 'react';
import {Card} from "@/components/ui/card";
import PositionCard from "@/components/position-card/PositionCard";
import {positions} from "@/lib/constants";
import SelectedTeamCard from "@/components/selected-team/SelectedTeamCard";

const PlayerPositions = () => {
    return (
        <Card
            className="bg-dark-gray rounded-2xl p-4 bg-opacity-20 backdrop-blur border-none">
            <p className="font-pixellari text-web-white text-[24px] mb-4">Positions for your team</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {
                    positions.map((position) => {
                        return (
                            <div key={position.id}>
                                <PositionCard name={position.name} img={position.img}/>
                                <SelectedTeamCard/>
                            </div>)
                    })
                }
            </div>
        </Card>
    );
};

export default PlayerPositions;