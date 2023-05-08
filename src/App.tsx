import React from 'react';
import Main from "./components/Main";
import Game from "./components/Game/Game";
import StartMenu from "./components/StartMenu/StartMenu";
import WinMenu from "./components/WinMenu/WinMenu";


function App(): JSX.Element {
    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden scroll-smooth items-center justify-start bg-slate-800">
            <Main>
                <StartMenu />
            </Main>
            <Main>
                <Game/>
            </Main>
            <Main>
                <WinMenu />
            </Main>
        </div>
    );
}

export default App;
