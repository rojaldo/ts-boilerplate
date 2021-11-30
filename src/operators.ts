
import { count, filter, from, map, Observable, of } from 'rxjs';



const isLeapYear = (year: number): Observable<boolean> => {
    return of(year).pipe(
        map(y => y % 4 === 0 && y % 100 !== 0 || y % 400 === 0)
    );
}


const doSomething = (d: Date)  => {
    const christmas = new Date(d.getFullYear(), 11, 25);
    return Math.floor((christmas.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
}

const daysToChristmas = (): Observable<number> => {
    return of(new Date()).pipe(
        map(d => {
            return doSomething(d)
        })
    );
}

const countCharacter = (myString: string, char: string): Observable<number> => {
    return from(myString).pipe(
        filter(c => c === char),
        count()
    );
}

countCharacter('hello', 'l').subscribe(console.log);
