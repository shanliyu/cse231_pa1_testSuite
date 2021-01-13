import * as mocha from 'mocha';
import {expect} from 'chai';
import { parser } from 'lezer-python';
import { traverseExpr, traverseStmt, traverse, parse } from '../CSE231_PA1/parser';

// We write tests for each function in parser.ts here. Each function gets its 
// own describe statement. Each it statement represents a single test. You
// should write enough unit tests for each function until you are confident
// the parser works as expected. 
export function testSuite_parser() {
  describe('traverseExpr(c, s) function from test suite', () => {
      it('parses a number in the beginning', () => {
          const source = "987";
          const cursor = parser.parse(source).cursor();
      
          // go to statement
          cursor.firstChild();
          // go to expression
          cursor.firstChild();
      
          const parsedExpr = traverseExpr(cursor, source);
      
          // Note: we have to use deep equality when comparing objects
          expect(parsedExpr).to.deep.equal({tag: "num", value: 987});
        })

        it('parses an arith op in the beginning', () => {
          const source = "1+2";
          const cursor = parser.parse(source).cursor();
          cursor.firstChild();
          cursor.firstChild();
          const parsedExpr = traverseExpr(cursor, source);
          const result = {tag: "arithOp", operand1: {tag: "num", value: 1}, op: {tag: "add"}, operand2: {tag: "num", value: 2}};
          expect(parsedExpr).to.deep.equal(result);
        })
      
        it('parses a print()', () => {
          const source = "print(1)";
          const cursor = parser.parse(source).cursor();
          cursor.firstChild();
          cursor.firstChild();
          const parsedExpr = traverseExpr(cursor, source);
          const result = {tag:"builtin1", name: "print", arg: {tag: "num", value: 1}};
          expect(parsedExpr).to.deep.equal(result);
        })

        it('parses a print() of arith op', () => {
          const source = "print(1*3)";
          const cursor = parser.parse(source).cursor();
          cursor.firstChild();
          cursor.firstChild();
          const parsedExpr = traverseExpr(cursor, source);
          const result = {
            tag:"builtin1", 
            name: "print", 
            arg: {
              tag: "arithOp", 
              operand1:{
                tag: "num", 
                value:1
              }, 
              op: {
                tag: "mul"
              }, 
              operand2: {
                tag: "num", 
                value:3
              }
            }
          };
          expect(parsedExpr).to.deep.equal(result);
        })
        it('parses a print() of builtin1', () => {
          const source = "print(abs(-1))";
          const cursor = parser.parse(source).cursor();
          cursor.firstChild();
          cursor.firstChild();
          const parsedExpr = traverseExpr(cursor, source);
          const result = {
            tag:"builtin1", 
            name: "print", 
            arg: {
              tag: "builtin1",
              name: "abs",
              arg: {
                tag: "arithOp",
                operand1: {
                  tag: "num",
                  value: -1
                },
                op: {
                  tag: "mul",
                },
                operand2: {
                  tag: "num",
                  value: 1,
                },
              },
            },
          };
          expect(parsedExpr).to.deep.equal(result);
        })

        it('parses a abs() of builtin2', () => {
          const source = "abs(max(-3,-2))";
          const cursor = parser.parse(source).cursor();
          cursor.firstChild();
          cursor.firstChild();
          const parsedExpr = traverseExpr(cursor, source);
          const result = {
            tag:"builtin1", 
            name: "abs", 
            arg: {
              tag: "builtin2",
              name: "max",
              arg1: {
                tag: "arithOp",
                operand1: {
                  tag: "num",
                  value: -1
                },
                op: {
                  tag: "mul",
                },
                operand2: {
                  tag: "num",
                  value: 3,
                },
              },
              arg2: {
                tag: "arithOp",
                operand1: {
                  tag: "num",
                  value: -1
                },
                op: {
                  tag: "mul",
                },
                operand2: {
                  tag: "num",
                  value: 2,
                },
              },
            },
          };
          expect(parsedExpr).to.deep.equal(result);
        })

      });
      
      describe('traverseStmt(c, s) function', () => {
        it('parses a number in the beginning', () => {
          const source = "987";
          const cursor = parser.parse(source).cursor();
      
          // go to statement
          cursor.firstChild();
          // go to expression
          cursor.firstChild();
      
          const parsedExpr = traverseExpr(cursor, source);
      
          // Note: we have to use deep equality when comparing objects
          expect(parsedExpr).to.deep.equal({tag: "num", value: 987});
        })

      });
      
      describe('traverse(c, s) function', () => {
        // TODO: add tests here to ensure traverse works as expected
      });
      
      describe('parse(source) function', () => {
        it('parse a number', () => {
          const parsed = parse("987");
          expect(parsed).to.deep.equal([{tag: "expr", expr: {tag: "num", value: 987}}]);
        });  
      
        // TODO: add additional tests here to ensure parse works as expected
      });
}