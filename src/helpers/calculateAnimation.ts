export const calculateAnimation = (currentIndex:number, emptyIndex:number): string => {
    let animation: string = ''
    if (currentIndex - emptyIndex === 4) {
        animation = 'animate-slide_bottom'
    }
    if (currentIndex - emptyIndex === -4) {
        animation = 'animate-slide_top'
    }
    if (currentIndex - emptyIndex === 1) {
        animation = 'animate-slide_left'
    }
    if (currentIndex - emptyIndex === -1) {
        animation = 'animate-slide_right'
    }
    return animation
}