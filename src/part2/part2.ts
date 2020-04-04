import  {filter, map, reduce, compose} from "ramda"


/* Question 1 */
export const partition : <T> (pred: ((obj:T)=> boolean), arr:T[]) => T[][] = <T>(pred: ((obj:T)=> boolean), arr:T[]) => 
[filter(pred, arr), filter((x)=>!pred(x), arr)];


/* Question 2 */
export const mapMat : <T> (func: (obj:T)=>T, arr:T[][]) => T[][] =
    <T>(func: (obj:T)=>T, arr:T[][]) => map((subArr:T[])=>map(func, subArr), arr);

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

export const maxSpeed : (pokedex:Pokemon[]) => Pokemon[] = (pokedex:Pokemon[]) =>
filter((pokemon:Pokemon)=>pokemon.base.Speed===(reduce((acc:number,curr:number) => Math.max(acc,curr), 0, map((p:Pokemon)=>p.base.Speed, pokedex))), pokedex);

    // reduce((acc, curr) => {
    //     if (curr === pokedex[0])
    //         return acc;
    //     else if (acc[0].base.Speed < curr.base.Speed)
    //         return [curr];
    //     else if (acc[0].base.Speed === curr.base.Speed)
    //         return acc.concat([curr]);
    //     return acc;},
    //     [pokedex[0]], pokedex);

export const grassTypes : (pokedex:Pokemon[]) => string[] = (pokedex:Pokemon[]) => 
map((pok:Pokemon)=>pok.name.english, filter((p:Pokemon)=>p.type.indexOf('Grass')>-1, pokedex)).sort();

export const uniqueTypes : (pokedex:Pokemon[]) => string[] = (pokedex:Pokemon[]) =>
reduce((acc:string[], curr:string) => acc.indexOf(curr)>-1 ? acc : acc.concat([curr]), //look for duplicates
[],
  reduce((acc:string[], curr:string[])=> acc.concat(curr), //concat all types
  [],
  map((p:Pokemon)=>p.type,pokedex)) //get all types
).sort(); //sort all