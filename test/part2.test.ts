import { expect } from "chai";
import { partition } from "../src/part2/part2";

describe("Assignment 1 Part 2", () => {
    it("check partition", ()=> {
        expect(partition<number>((x:number)=>x>3,[0,1,2,3,4,5])).to.equals([[4,5],[0,1,2,3]]);
    });
});
