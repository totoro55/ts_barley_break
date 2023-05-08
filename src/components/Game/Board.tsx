import React, {FC} from 'react';
import Cell from "./Cell";
import {calculateActive} from "../../helpers/calculateActiveCells";

interface BoardProps {
    board: Array<number | null>
    moveCell: (cell: number ) => void
    volume:number
}

const Board: FC<BoardProps> = ({board, moveCell, volume}) => {

    const emptyCell = board.findIndex(el => el === 0)
    const activeCells = calculateActive(emptyCell)

    return (
        <div className='w-full h-full grid grid-cols-4 grid-rows-4 gap-3 p-3
        bg-slate-300 rounded-lg overflow-hidden
        '>
            {board.map((cell,i) => {
                return (
                    <Cell
                        emptyIndex={emptyCell}
                        currentIndex={i}
                        key={cell}
                        volume={volume}
                        moveCell={moveCell}
                        isActive={cell ? activeCells.includes(i) : false}
                        cell={cell}/>
                )
            })}
        </div>
    );
};

export default Board;