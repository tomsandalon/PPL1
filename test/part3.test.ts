import { expect } from "chai";
import { Optional, makeNone, makeSome, isSome, isNone, bind } from "../src/part3/optional";
import { partition } from "ramda";

const safeDiv = (x: number, y: number): Optional<number> =>
y === 0 ? makeNone() : makeSome(x / y);
const minusOne = (x: number): Optional<number> => makeSome(x-1);
const divideByZero = (x: number): Optional<number> => makeNone();


describe("Assignment 1 Part 3", () => {
    it("check Optional q1.1", ()=> {
        expect(safeDiv(5,2)).to.deep.equals({ tag: 'Some', value: 2.5 });
        expect(safeDiv(5,0)).to.deep.equals({ tag: 'None' });
    });
    it("check Optional q1.2", ()=> {
        expect(isSome(safeDiv(5,2))).to.equals(true);
        expect(isNone(safeDiv(5,0))).to.equals(true);
    });
    it("check Optional q2", ()=> {
        expect(bind({tag:'Some',value:5}, minusOne)).to.deep.equals({ tag: 'Some', value: 4 });
        expect(bind({tag:'Some',value:5}, divideByZero)).to.deep.equals({ tag: 'None'});
    });
});



