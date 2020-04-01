import { expect } from "chai";
import { partition, mapMat } from "../src/part2/part2";

describe("Assignment 1 Part 2", () => {
    it("check partition", ()=> {
        expect(partition<number>((x:number)=>x>3,[0,1,2,3,4,5])).to.deep.equals([[4,5],[0,1,2,3]]);
    });

    it("check mapMat", ()=> {
        expect(mapMat<number>((x)=>x*x,[[1,2,3],[4,5,6],[7,8,9]])).to.deep.equals( [[ 1, 4, 9 ], [ 16, 25, 36 ], [ 49, 64, 81 ]]);
    });


});
