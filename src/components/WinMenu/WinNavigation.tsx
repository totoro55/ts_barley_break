import React, {FC} from 'react';
import Button from "../../UI/Button";

interface WinNavigationProps {
    handleTryAgain:()=>void
    handleGoToStart:()=>void

}

const WinNavigation: FC<WinNavigationProps> = ({handleGoToStart, handleTryAgain}) => {
    return (
        <div className='flex w-3/4 gap-10 items-center justify-between flex-col '>
            <Button onClick={handleGoToStart}>
                <div className='flex items-center gap-1'>
                    <p className='text-5xl'>
                        To start
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-16 h-16">
                        <path
                            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                        <path
                            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                    </svg>

                </div>
            </Button>
            <Button onClick={handleTryAgain}>
                <div className='flex items-center gap-1'>
                    <p className='text-5xl'>
                        Try again
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-16 h-16">
                        <path fillRule="evenodd"
                              d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                              clipRule="evenodd"/>
                    </svg>
                </div>
            </Button>
        </div>
    );
};

export default WinNavigation;