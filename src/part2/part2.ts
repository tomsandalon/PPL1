import  {filter} from "ramda"


/* Question 1 */
export const partition : <T> (pred: ((obj:T)=> boolean), arr:T[]) => T[][] = <T>(pred: ((obj:T)=> boolean), arr:T[]) => 
[
    arr.filter(pred,arr),
    arr.filter((x)=>!pred(x),arr)
];

/* Question 2 */
export const mapMat = undefined;

/* Question 3 */
export const composeMany = undefined;

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
