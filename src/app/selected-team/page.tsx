import React from 'react';
import Header from "@/components/commons/Header";
import PlayerPositions from "@/components/player-positions/PlayerPositions";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

const SelectedTeam = () => {
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-2 gap-4 text-web-white mt-4 mb-4">
                <Card className="bg-dark-gray rounded-2xl p-4 bg-opacity-20 backdrop-blur border-none">
                    <p className="text-4xl text-web-white font-bold mb-4 font-pixellari">Welcome</p>
                    <p className="text-[15px] text-web-white mb-8">
                        Lorem ipsum dolor sit amet consectetur. Nisi dignissim pretium commodo velit volutpat a tellus.
                        Ornare imperdiet ut aliquet pharetra ipsum semper risus. Cursus bibendum sagittis tortor non
                        fames risus arcu ut. Odio eu risus ultrices scelerisque et mauris orci.
                    </p>
                    <Button
                        size="lg"
                        className="w-full text-white hover:from-purple-500 hover:to-purple-700 rounded-lg py-3"
                    >
                        SPIN
                    </Button>
                </Card>
                <Card className="flex flex-col text-[34px] justify-center items-center bg-dark-gray rounded-2xl p-4 bg-opacity-20 backdrop-blur border-none">
                    <p className="text-web-white font-medium font-pixellari">The team will </p>
                    <p className="text-web-white font-medium font-pixellari">appear here</p>
                </Card>
            </div>
            <PlayerPositions/>
        </div>
    );
};

export default SelectedTeam;