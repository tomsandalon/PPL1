import  {filter, map, reduce, compose} from "ramda"


/* Question 1 */
export const partition : <T> (pred: ((obj:T)=> boolean), arr:T[]) => T[][] = <T>(pred: ((obj:T)=> boolean), arr:T[]) => 
[
    arr.filter(pred,arr),
    arr.filter((x)=>!pred(x),arr)
];

/* Question 2 */
export const mapMat : <T> (func: (obj:T)=>T, arr:T[][]) => T[][] =
    <T>(func: (obj:T)=>T, arr:T[][]) => map((x:T[])=>map(func, x), arr);

/* Question 3 */
export const composeMany : <T> (array:Array<(obj:T)=>T>) => ((newFunc:T)=>T) = <T> (array:Array<(obj:T)=>T>) =>
    reduce((acc,curr)=> compose(acc, curr), (x:T)=>x, array);



/* Question 4 */
interface Languages {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
}

interface Stats {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
}

interface Pokemon {
    id: number;
    name: Languages;
    type: string[];
    base: Stats;
}

export const maxSpeed = undefined;

export const grassTypes = undefined;

export const uniqueTypes = undefined;
