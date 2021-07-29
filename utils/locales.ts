export function getStartsWith(locale?:string){
    if(locale === 'de') return ""
    return `${locale ?? ''}/*`
}


export function getDate(lang:string,date:string){
    return new Date(date).toLocaleDateString(lang,{ year: 'numeric', month: 'short', day: 'numeric'})
}
