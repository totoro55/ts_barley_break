import React, {FC, useRef} from 'react';
import {calculateAnimation} from "../../helpers/calculateAnimation";
import {soundShake, soundShift} from "../../helpers/sounds";

interface CellProps {
    cell: number | null
    isActive: boolean
    moveCell: (cell: number) => void
    emptyIndex: number
    currentIndex: number
    volume:number
}

const Cell: FC<CellProps> = (
    {
        cell,
        moveCell,
        isActive,
        emptyIndex,
        currentIndex,
        volume}) => {

    const ref = useRef<HTMLDivElement>(null)
    const animation = calculateAnimation(currentIndex, emptyIndex)
    const handleMove = () => {
        if (!isActive && ref.current){
                ref.current.classList.add('animate-shake')
                soundShake(volume)
            setTimeout(() => {
                if (ref.current) {
                    ref.current.classList.remove('animate-shake')
                }
            }, 300)
            return
        }
        if (cell && isActive) {
            moveCell(cell)
            if (ref.current) {
                ref.current.classList.add(animation)
                soundShift(volume)
            }
            setTimeout(() => {
                if (ref.current) {
                    ref.current.classList.remove(animation)
                }
            }, 300)
        }

    }

    return (
        <div
            ref={ref}
            onClick={handleMove}
            className={`flex items-center justify-center p-2
            border-2 rounded-lg border-transparent overflow-hidden 
            ${
                isActive ? 'cursor-pointer hover:bg-amber-600 hover:drop-shadow-2xl' : 'cursor-default'
            }
            ${
                cell !== 0
                    ? 'bg-amber-500 shadow-lg'
                    : 'bg-transparent border-transparent'
            }
            transition-all duration-200`}>
            {cell!==0
                ? <div className='w-full h-full rounded-full flex items-center justify-center border-4 border-slate-700'>
                    <p className={`text-xl md:text-3xl lg:text-5xl text-slate-700 tracking-widest select-none`}>
                        {cell!==0 ? cell : ''}
                    </p>
                </div>
                : ''
            }

        </div>
    );
};

export default Cell;