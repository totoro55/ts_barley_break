import React, {FC, ReactNode} from 'react';

interface ButtonProps {
    onClick?:()=>void
    children?:ReactNode
    title?:string
}
const Button:FC<ButtonProps> = ({onClick, children,title}) => {
    return (
        <button
            title={title}
            className='p-3 bg-amber-500 border-4 border-slate-700 text-slate-700 text-3xl rounded-lg
            hover:bg-amber-600 transition-all duration-300 tracking-wider
            '
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;