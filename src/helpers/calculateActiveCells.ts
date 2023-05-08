export const calculateActive = (index: number):number[] => {
    let activeIndexes: number[] = [index+1, index-1, index+4, index-4]
    if (index===0){
        activeIndexes = [1,4]
    }
    if (index===3){
        activeIndexes = [2,7]
    }
    if (index===12){
        activeIndexes = [8,13]
    }
    if (index===15){
        activeIndexes = [11,14]
    }
    if (index===1 || index===2){
        activeIndexes = [index-1, index+1, index+4]
    }
    if (index===13 || index===14){
        activeIndexes = [index-1, index+1, index-4]
    }
    if (index===4 || index===8){
        activeIndexes = [index-4, index+4, index+1]
    }
    if (index===7 || index===11){
        activeIndexes = [index-4, index+4, index-1]
    }
    return activeIndexes
}