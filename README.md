# CSE 231 PA1 Test Suite

## Instruction
You will need to pull this repo at the same level of your project. If your project is named CSE231_PA1, then your directory hierachy will look like below: 
```
$ ls -ltr
CSE231_PA1
cse231_pa1_testsuite
```

Once you have pulled down the repo, run `npm install` to install the required packages. (I did not modify `package.json` or `package-lock.json` from PA1, might be subjected to change in the future PAs)

Add the below lines accordingly to your `test` directory under your project: 


For `runner.test.ts`: 
Import the test suite by adding this line at the top: 
 ```
 import { testSuite_runner } from '../../cse231_pa1_testSuite/testsuite.runner';
 ```
 
At the bottom of the file, add `testSuite_runner(importObject);`

For `parser.test.ts`: 
Import the test suite by adding this line at the top: 
```
import { testSuite_parser} from '../../cse231_pa1_testSuite/testsuite.parser';
```

At the bottom, add  `testSuite_parser();`

## Contributing to this test suite
Please first create feature branches to add your own tests, then make a PR before I merge it to master. 