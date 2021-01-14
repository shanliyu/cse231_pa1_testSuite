import { run } from '../CSE231_PA1/runner';

  
// We write end-to-end tests here to make sure the compiler works as expected.
// You should write enough end-to-end tests until you are confident the compiler
// runs as expected. 
export function testSuite_runner(importObject : any, expect: any) {
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

    it('Arith op of builtin2', async() => {
      var result = await run("3*max(-3,-2)", config);
      expect(result).to.equal(-6);
    });

    it('Arith op of builtin2 of builtin1', async() => {
      var result = await run("abs(3*max(-3,-2))", config);
      expect(result).to.equal(6);
    });
    it('Arith op of builtin2 of builtin1', async() => {
      var result = await run("3*max(-3,-2)*min(5,3)", config);
      expect(result).to.equal(-18);
    });
    it('Assignment of Arith op of builtin2', async() => {
      var result = await run("x=3*max(-3,-2)*min(5,3)\nx", config);
      expect(result).to.equal(-18);
    });

    it('Assignment of Arith op of builtin2 of builtin1', async() => {
      var result = await run("x=2*max(-2,-3)\nx", config);
      expect(result).to.equal(-4);
    });


    it('nested builtin1 and builtin2 and arithmetic op with assignment', async() => {
      var result = await run("x=abs(min(-2,abs(min(-4,min(-8,-1)))))\ny=x+abs(5)\ny", config);
      expect(result).to.equal(7);
    });


  });
}