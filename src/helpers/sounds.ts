export const soundShift = (volume:number):void =>{
    const audio = new Audio('/assets/shift.mp3')
    audio.volume = volume/2
    audio.autoplay=true
}
export const soundShake = (volume:number):void =>{
    const audio = new Audio('/assets/shake.mp3')
    audio.volume = volume/10
    audio.autoplay=true
}

export const soundWin = (volume:number):void =>{
    const audio = new Audio('/assets/win.mp3')
    audio.volume = volume/2
    audio.autoplay=true
}