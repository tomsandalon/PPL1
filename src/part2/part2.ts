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

export const maxSpeed : (pokedex:Pokemon[]) => Pokemon[] = (pokedex:Pokemon[]) =>
    reduce((acc, curr) => {
        if (curr === pokedex[0])
            return acc;
        else if (acc[0].base.Speed < curr.base.Speed)
            return [curr];
        else if (acc[0].base.Speed === curr.base.Speed)
            return acc.concat([curr]);
        return acc;},
        [pokedex[0]], pokedex);

export const grassTypes = undefined;

export const uniqueTypes = undefined;


//quick test here


let pokedex : Pokemon[] = [{
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 1
    }
},{
"id": 2,
"name": {
  "english": "Bulbasaur",
  "japanese": "フシギダネ",
  "chinese": "妙蛙种子",
  "french": "Bulbizarre"
},
"type": [
  "Grass",
  "Poison"
],
"base": {
  "HP": 45,
  "Attack": 49,
  "Defense": 49,
  "Sp. Attack": 65,
  "Sp. Defense": 65,
  "Speed": 3
}
},{
    "id": 3,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 2
    }
    },{
        "id": 4,
        "name": {
          "english": "Bulbasaur",
          "japanese": "フシギダネ",
          "chinese": "妙蛙种子",
          "french": "Bulbizarre"
        },
        "type": [
          "Grass",
          "Poison"
        ],
        "base": {
          "HP": 45,
          "Attack": 49,
          "Defense": 49,
          "Sp. Attack": 65,
          "Sp. Defense": 65,
          "Speed": 3
        }
        },
        
]
console.log(maxSpeed(pokedex));