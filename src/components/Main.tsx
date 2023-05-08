import React, {FC, ReactNode} from 'react';

const Main:FC<{children?:ReactNode}> = ({children}) => {
    return (
        <div className='container flex flex-col justify-center items-center scroll-smooth'>
            {children}
        </div>
    );
};

export default Main;