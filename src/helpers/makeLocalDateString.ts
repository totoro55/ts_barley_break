export const makeLocalDateString = (year:number, month:number, day:number):string =>{
    return new Date(year, month, day).toLocaleDateString('en-EN', {year:'numeric', month:'numeric', day: "numeric"})
}