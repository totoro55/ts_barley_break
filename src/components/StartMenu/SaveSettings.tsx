import React, {FC} from 'react';

interface SaveSettingsProps {
    isSaveLocal:boolean
    setIsSaveLocal:()=>void
}
const SaveSettings:FC<SaveSettingsProps> = ({isSaveLocal, setIsSaveLocal}) => {
    return (
        <div className='flex w-fit p-3 items-center justify-center gap-3
                     border-4 rounded-lg border-slate-700'>
            <p title='Save your records in LocalStorage'
               className='text-xl text-slate-700 cursor-help'>
                Save records local
            </p>
            <input
                type='checkbox'
                checked={isSaveLocal}
                onChange={setIsSaveLocal}
                className='accent-amber-500 h-full w-12 rounded-lg'
            />
        </div>
    );
};

export default SaveSettings;