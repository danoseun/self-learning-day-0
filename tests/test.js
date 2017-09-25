// import mocha from 'mocha';
import chai, {assert} from 'chai';
import aritGeo from '../src/main.js';

describe('Arithmetic or Geometric sequence',  () => {
    describe('handle valid input',  () => {
        it('should return 1, 2, 3, 4 as an arithmetic sequence',  () => {
            assert.equal(aritGeo([1, 2, 3, 4]), 'Arithmetic')
        });
        it('should return 2, 6, 18, 54 as a geometric sequence',  () => {
            assert.equal(aritGeo([2, 6, 18, 54]), 'Geometric')
        });

        it('should return 7, 5, 3, 1 as an arithmetic sequence',  () =>{
            assert.equal(aritGeo[7, 5, 3, 1],'Arithmetic')
        });

        it('should return 2, 4, 8, 16 as a geometric sequence',  () => {
            assert.equal(aritGeo[4, 3, 2, 1], 'Geometric')
        });

        it('should return 3, 6, 9, 12 as an arithmetic sequence', () => {
            assert.equal(aritGeo[3, 6, 9, 12], 'Arithmetic')
        });

    });

    describe('handle invalid input', () => {
        it('should return demo as not an array', () => {
            assert.equal(aritGeo('demo'), '-1')
        });
        it('should return array as empty', () => {
            assert.equal(aritGeo([]), '0')
        });
        it("should return One value in array", () => {
            assert.equal(aritGeo([2]), '-1')
        });
        it('should return neither arithmetic nor geometric progression', () => {
            assert.equal(aritGeo([1, 2, 3, 9, 10]), '-1')
        });

        it ('should return One value in array', () => {
            assert.equal(aritGeo([2,4,8,-2]), '-1')
        });
    });
});
