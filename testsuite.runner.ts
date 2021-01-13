import { run } from '../CSE231_PA1/runner';
import { expect } from 'chai';
import 'mocha';
import { isFunctionExpression } from 'typescript';
  
// We write end-to-end tests here to make sure the compiler works as expected.
// You should write enough end-to-end tests until you are confident the compiler
// runs as expected. 
export function testSuite_runner(importObject : any) {
  describe('run(source, config) function', () => {
    const config = { importObject };

    it('Get the correct positive absolute value', async() => {
      var result = await run("abs(3)", config);
      expect(result).to.equal(3);
    });

    it('Get the correct negative absolute value', async() => {
      var result = await run("abs(-3)", config);
      expect(result).to.equal(3);
    });

    it('Get the correct absolute value of an expression', async() => {
      var result = await run("abs(-3*4)", config);
      expect(result).to.equal(12);
    });

    it('Max of two positive number', async() => {
      var result = await run("max(1,2)", config);
      expect(result).to.equal(2);
    });

    it('Max of one positive, one negative number', async() => {
      var result = await run("max(1,-2)", config);
      expect(result).to.equal(1);
    });

    it('Max of two negative number', async() => {
      var result = await run("max(-3,-2)", config);
      expect(result).to.equal(-2);
    });

    it('Min of two positive number', async() => {
      var result = await run("min(3,2)", config);
      expect(result).to.equal(2);
    });

    it('Min of one positive, one negative number', async() => {
      var result = await run("min(-3,2)", config);
      expect(result).to.equal(-3);
    });

    it('Min of two negative number', async() => {
      var result = await run("min(-5,-2)", config);
      expect(result).to.equal(-5);
    });

    it('Power of two values', async() => {
      var result = await run("pow(2,3)", config);
      expect(result).to.equal(8);
    });

    // This could differ for your implementation. 
    it('Negative power', async() => {
      var result = await run("pow(2,-3)", config);
      expect(result).to.equal(0);
    });

  });
}