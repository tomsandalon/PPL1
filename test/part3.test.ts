import { expect } from "chai";
import { Optional, makeNone, makeSome, isSome, isNone, bind } from "../src/part3/optional";
import { partition } from "ramda";
import { naiveValidateUser, monadicValidateUser } from "../src/part3/result";

const safeDiv = (x: number, y: number): Optional<number> =>
y === 0 ? makeNone() : makeSome(x / y);
const minusOne = (x: number): Optional<number> => makeSome(x-1);
const divideByZero = (x: number): Optional<number> => makeNone();
const user1 = { name: "Ben", email: "bene@post.bgu.ac.il", handle: "bene" };
const user2 = { name: "Bananas", email: "me@bananas.com", handle: "bene" };

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
    it("check Optional q3", ()=> {
        expect(naiveValidateUser(user1)).to.deep.equals(monadicValidateUser(user1));
        expect(naiveValidateUser(user1)).to.deep.equals({ tag: 'Ok',value: { name: 'Ben', email: 'bene@post.bgu.ac.il', handle: 'bene' } });
        expect(naiveValidateUser(user2)).to.deep.equals(monadicValidateUser(user2));
        expect(naiveValidateUser(user2)).to.deep.equals({ tag: 'Failure', message: 'Bananas is not a name' });
    });
});



