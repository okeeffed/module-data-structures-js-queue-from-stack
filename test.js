const queueFromStack = require('./index');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;
describe('queueFromStack', function () {
    it('queueFromStack two stacks of the same length', function () {
        const srcOne = [1, 2, 3];
        const srcTwo = ['Hello', 'world', '!'];
        const expectRes = [
            '!',
            3,
            'world',
            2,
            'Hello',
            1
        ];

        let res = queueFromStack(srcOne, srcTwo);
        expect(res.data)
            .to
            .deep
            .equal(expectRes);
    });

    it('queueFromStack two stacks of the same length', function () {
        const srcOne = [1, 2, 3];
        const srcTwo = ['Hello'];
        const expectRes = [3, 2, 'Hello', 1];

        let res = queueFromStack(srcOne, srcTwo);
        expect(res.data)
            .to
            .deep
            .equal(expectRes);
    });
});