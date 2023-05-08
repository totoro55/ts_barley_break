import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import WinNavigation from "./WinNavigation";
import WinHeader from "./WinHeader";
import {setLastRecord} from "../../store/reducers/recordsSlice";
import {useInView} from "react-intersection-observer";

const WinMenu: FC = () => {

    const records = useAppSelector(state => state.records)
    const dispatch = useAppDispatch()
    const { ref, inView} = useInView({
        threshold: .2,
    });

    const lastRecord = records.lastRecord ? records.lastRecord.moves : 0

    const handleGoToStart = (): void => {
        dispatch(setLastRecord(null))
        document.location = '#start'
    }
    const handleTryAgain = (): void => {
        dispatch(setLastRecord(null))
        document.location = '#game'
    }

    return (
        <div
            id='win'
            ref={ref}
            className='w-full h-screen flex flex-col items-center justify-center gap-6 relative'>
            <div className='w-1/2 aspect-square flex items-center justify-center
                bg-slate-600 rounded-lg p-3 relative overflow-hidden'>
                <div className='w-full h-full flex-col flex items-center justify-around
                bg-slate-300 rounded-lg'>
                    <WinHeader
                        isAnimate={inView}
                        moves={lastRecord}
                    />
                    <WinNavigation
                        handleTryAgain={handleTryAgain}
                        handleGoToStart={handleGoToStart}
                    />
                </div>
            </div>
        </div>
    );
};

export default WinMenu;