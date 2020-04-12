import  {filter, map, reduce, compose} from "ramda"


/* Question 1 */
export const partition : <T> (pred: ((obj:T)=> boolean), arr:T[]) => T[][] = <T>(pred: ((obj:T)=> boolean), arr:T[]):T[][] => 
[filter(pred, arr), filter((x:T)=>!pred(x), arr)];


/* Question 2 */
export const mapMat :<T,U>(fanc:(obj:T)=>U,matrix:T[][])=>U[][] = <T,U>(fanc:(obj:T)=>U,matrix:T[][]):U[][]=>
map((x:T[])=>map(fanc,x),matrix);

/* Question 3 */
export const composeMany : <T>(array:Array<(obj:T)=>T>) => ((newFunc:T)=>T) = <T> (array:Array<(obj:T)=>T>):((newFunc:T)=>T) =>
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

export const maxSpeed:(arr:Pokemon[])=>Pokemon[] = (arr:Pokemon[]):Pokemon[]=>
filter((pokemon:Pokemon)=>pokemon.base.Speed===reduce((acc:number,cur:Pokemon)=>Math.max(acc,cur.base.Speed),0,arr),arr);

export const grassTypes : (pokedex:Pokemon[]) => string[] = (pokedex:Pokemon[]):string[] => 
map((pok:Pokemon)=>pok.name.english, filter((p:Pokemon)=>p.type.indexOf('Grass')>-1, pokedex)).sort();

export const uniqueTypes:(arr:Pokemon[])=>string[] = (arr:Pokemon[]):string[]=>
    reduce((acc:string[],cur:string)=>acc.indexOf(cur)===-1?acc.concat([cur]):acc,[],
    reduce((acc:string[],cur:Pokemon)=>acc.concat(cur.type),[],arr)).sort();