import React, {FC, useEffect, useState} from 'react';
import Board from "./Board";
import {initBoard} from "../../constants/initBoard";
import {shuffleArray} from "../../helpers/shuffleArray";
import Header from "./Header";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {addNewRecord, setLastRecord} from "../../store/reducers/recordsSlice";
import {newRecord} from "../../helpers/makeNewRecord";
import {soundWin} from "../../helpers/sounds";

const Game: FC = () => {

    const defaultBoard: number[] = JSON.parse(JSON.stringify(initBoard))
    const records = useAppSelector(state => state.records)
    const dispatch = useAppDispatch()

    const [volume, setVolume] = useState<number>(.5)
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [movesCount, setMovesCount] = useState<number>(0)
    const [board, setBoard] = useState<Array<number>>([])


    useEffect(() => {
        setBoard(shuffleArray(defaultBoard))
    }, [])

    useEffect(() => {
        if (board.toString() === initBoard.toString()) {
            setIsCorrect(true)
            dispatch(addNewRecord(newRecord(movesCount)))
            return
        }
    }, [board])

    useEffect(()=>{
        if (movesCount>0 && isCorrect){
            const saveData = JSON.stringify(records.ranks)
            localStorage.setItem('barley-break-save', saveData)
            soundWin(volume)
            dispatch(setLastRecord(newRecord(movesCount)))
            setTimeout(()=>{
                document.location = '#win'
            }, 1000)
            setTimeout(()=>{
                setIsCorrect(false)
                setMovesCount(0)
                setBoard(shuffleArray(defaultBoard))
            }, 2000)

        }
    },[isCorrect])

    const handleCellMove = (cell: number): void => {
        setMovesCount(movesCount + 1)
        const newBoard = board.map(el => {
            if (el === cell) {
                return 0
            } else if (!el) {
                return cell
            } else {
                return el
            }
        })
        setBoard(newBoard)
    }

    const handleReset = (): void => {
        setBoard(shuffleArray(defaultBoard))
        setIsCorrect(false)
        setMovesCount(0)
    }

    const handleHelp = (): void => {
        setMovesCount(0)
        setBoard(initBoard)
    }

    const handleCheatWin = (): void => {
        setMovesCount(movesCount+1)
        setBoard(initBoard)
    }

    return (
        <div
            id='game'
            className='w-full h-screen flex flex-col items-center justify-center gap-3 lg:gap-6 relative'>
            <Header handleHelp={handleHelp}
                    handleReset={handleReset}
                    movesCount={movesCount}
                    isCorrect={isCorrect}
                    volume={volume}
                    setVolume={setVolume}
                    cheatWin={handleCheatWin}
            />
            <div
                className={`w-full md:w-2/3 xl:w-1/2 aspect-square rounded-lg drop-shadow-2xl p-3
                ${isCorrect ? 'bg-emerald-500' : 'bg-slate-600'}
                transition-all duration-300`}>

                <Board board={board}
                       volume={volume}
                       moveCell={handleCellMove}/>
            </div>
        </div>

    );
};

export default Game;