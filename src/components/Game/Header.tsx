import React, {FC} from 'react';
import Button from "../../UI/Button";

interface HeaderProps {
    handleHelp: () => void
    handleReset: () => void
    movesCount: number
    isCorrect: boolean
    volume: number
    setVolume: (volume: number) => void
    cheatWin: () => void
}

const Header: FC<HeaderProps> = (
    {
        isCorrect,
        movesCount, handleHelp,
        handleReset,
        volume,
        setVolume,
        cheatWin
    }) => {

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value) / 100)
    }


    const handleVolumeSwitch = () => {
        if (volume !== 0) {
            setVolume(0)
            return
        }
        setVolume(1)
    }

    return (
        <div className={`w-full md:w-2/3 lg:w-1/2 rounded-lg p-3
            transition-all duration-300 drop-shadow-2xl
            ${isCorrect ? 'bg-emerald-500' : 'bg-slate-600'}
            `}>

            <div className='w-full h-full flex items-center justify-between rounded-lg bg-slate-300 p-3'>
                <div className='flex w-3/5 justify-start gap-6'>
                    <Button onClick={handleReset} title={'Reset position'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-9 h-9">
                            <path fillRule="evenodd"
                                  d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z"
                                  clipRule="evenodd"/>
                        </svg>
                    </Button>
                    <Button onClick={handleHelp} title={'How to win?'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-9 h-9">
                            <path fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </Button>
                    <Button onClick={handleVolumeSwitch} title={'Mute / unmute volume'}>
                        {volume !== 0
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-9 h-9">
                                <path
                                    d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"/>
                                <path
                                    d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-9 h-9">
                                <path
                                    d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z"/>
                            </svg>
                        }

                    </Button>
                    <input
                        onChange={e => handleVolumeChange(e)}
                        value={volume * 100}
                        type='range'
                        className='accent-amber-500 w-1/4 transition-all duration-300'
                    />
                </div>

                <h3
                    onDoubleClick={cheatWin}
                    className='text-3xl w-2/5 text-center text-slate-700 bg-amber-500 p-3 tracking-wider rounded-lg
                    border-4 border-slate-700 cursor-default'>
                    moves: {movesCount}
                </h3>
            </div>
        </div>
    );
};

export default Header;