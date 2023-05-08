import React, {FC} from 'react';
import Button from "../../UI/Button";
import {IRank} from "../../types/IRank";
import {compareArray} from "../../helpers/compareArray";
import {makeLocalDateString} from "../../helpers/makeLocalDateString";

interface RankingProps {
    showRanking:boolean
    ranks: IRank[]
    handleShowRanking:()=>void
}
const Ranking:FC<RankingProps> = ({showRanking, handleShowRanking, ranks} ) => {

    const sortedRanks = [...ranks].sort((a, b)=>compareArray(a.moves,b.moves))


    return (
        <div className={`w-full h-full flex-col flex items-center justify-around
                    bg-slate-300 rounded-lg absolute p-3
                    ${showRanking ? 'left-0' : 'left-full'}
                    transition-all duration-500`}>
            <h1 className='cursor-default select-none text-4xl text-center
                    text-slate-700 p-3 rounded-lg border-4 border-slate-700 tracking-wider drop-shadow-lg '>
                Records
            </h1>
            <div
                className='w-3/4 flex flex-col items-center justify-center
                rounded-lg border-4 border-slate-700 overflow-hidden'>
                {sortedRanks.map((rank,i)=>{
                    return (
                        <div
                            className='w-full flex items-center justify-between p-6 cursor-default
                             bg-transparent text-slate-700 odd:bg-amber-500 odd:text-slate-200 text-2xl tracking-wider'
                            key={rank.date.toString()+i }>
                            <p>
                                {i+1}
                            </p>
                            <p>
                                {rank.moves===Number.POSITIVE_INFINITY
                                    ? '--/--/--'
                                    : makeLocalDateString(rank.date.year, rank.date.month, rank.date.day)
                                }

                            </p>
                            <p>
                                {rank.moves===Number.POSITIVE_INFINITY
                                    ? '---'
                                    : rank.moves
                                }
                            </p>
                        </div>
                    )})}
            </div>
            <Button onClick={handleShowRanking}>
                Back
            </Button>
        </div>
    );
};

export default Ranking;