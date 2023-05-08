import React, {FC, useEffect, useState} from 'react';
import Navigation from "./Navigation";
import Ranking from "./Ranking";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {addAllRecords, setIsSaveLocal} from "../../store/reducers/recordsSlice";
import SaveSettings from "./SaveSettings";
import {IRank} from "../../types/IRank";

const StartMenu: FC = () => {

    const [showRanking, setShowRanking] = useState<boolean>(false)

    const records = useAppSelector((state) => state.records)
    const dispatch = useAppDispatch()

    // get save data & remember save settings local
    const localSaveData: string | null = localStorage.getItem('barley-break-save')
    const isSaveFromLocalStorage: string | null = localStorage.getItem('barley-break-is-save-local')

    useEffect(() => {
        if (isSaveFromLocalStorage !== null) {
            const parsedIsSaveFromLocalStorage = JSON.parse(isSaveFromLocalStorage)
            dispatch(setIsSaveLocal(parsedIsSaveFromLocalStorage))
        }
    }, [isSaveFromLocalStorage])

    useEffect(() => {
        if (localSaveData && records.isSaveLocal) {
            const parsedSaveData: IRank[] = JSON.parse(localSaveData)
            dispatch(addAllRecords(parsedSaveData.map(rank => {
                if (!rank.moves) {
                    return {...rank, moves: Number.POSITIVE_INFINITY}
                } else {
                    return rank
                }
            })))
        }
    }, [records.isSaveLocal, localSaveData])
    const handleShowRanking = (): void => setShowRanking(!showRanking)
    const handleStart = (): string | Location => document.location = '#game'
    const handleLocalSaveSwitch = (): void => {
        dispatch(setIsSaveLocal(!records.isSaveLocal))
        localStorage.setItem('barley-break-is-save-local', JSON.stringify(!records.isSaveLocal))
    }


    return (
        <div
            id='start'
            className='w-full h-screen flex flex-col items-center justify-center '>
            <div className='w-full md:w-2/3 lg:w-1/2 aspect-square flex items-center justify-center
                bg-slate-600 rounded-lg p-3 relative overflow-hidden'>
                <div className='w-full h-full flex-col flex items-center justify-around
                bg-slate-300 rounded-lg'>
                    <h1 className='cursor-default select-none text-2xl lg:text-5xl xl:text-7xl text-center
                bg-amber-500 text-slate-700 p-3 rounded-lg border-4 border-slate-700 tracking-wider drop-shadow-lg '>
                        Barley-Break
                    </h1>
                    <Navigation
                        start={handleStart}
                        ranking={handleShowRanking}
                    />
                    <SaveSettings
                        isSaveLocal={records.isSaveLocal}
                        setIsSaveLocal={handleLocalSaveSwitch}
                    />
                </div>
                <Ranking
                    showRanking={showRanking}
                    ranks={records.ranks}
                    handleShowRanking={handleShowRanking}
                />
            </div>
        </div>
    );
};

export default StartMenu;