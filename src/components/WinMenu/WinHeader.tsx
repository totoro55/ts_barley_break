import React, {FC, useEffect, useRef} from 'react';

interface WinHeaderProps {
    moves: number
    isAnimate:boolean
}

const WinHeader: FC<WinHeaderProps> = ({moves, isAnimate}) => {

    const firstHeaderRef = useRef<HTMLHeadingElement>(null)
    const secondHeaderRef = useRef<HTMLHeadingElement>(null)


    useEffect(()=>{
        if (firstHeaderRef.current && secondHeaderRef.current && isAnimate){
            firstHeaderRef.current.classList.add('animate-text_tracking_up')
            secondHeaderRef.current.classList.add('animate-text_tracking_up')
            setTimeout(()=>{
                if (firstHeaderRef.current && secondHeaderRef.current) {
                    firstHeaderRef.current.classList.remove('animate-text_tracking_up')
                    secondHeaderRef.current.classList.remove('animate-text_tracking_up')
                }
            },1000)
        }
    },[isAnimate])

    return (
        <div className='w-3/4 flex flex-col items-center justify-center gap-10'>
            <h2
                ref={firstHeaderRef}
                className='text-6xl text-amber-500 tracking-widest'>
                YOU WIN!
            </h2>
            <h3
                ref={secondHeaderRef}
                className='text-2xl text-slate-700 tracking-wider'>
                You spent
                <span className='text-amber-500'>
                    {' '+moves+' '}
                </span>
                moves
            </h3>
        </div>
    );
};

export default WinHeader;