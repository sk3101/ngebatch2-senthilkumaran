/*
Run this with
> npm install
> npm test maths-utils
*/

import { add, safeMultiply } from './maths-utils'

describe('When calling the Add function', () => {
  it('should add two integers', () => {
     // Arrange: Setup variables here
     let expected = 50;

     // Act: Call function here
     let result: number;
     result = add(30, 20);
 
     // Assert: Check results here
     expect(result).toBe(expected);
  })

  it('will add strings and numbers', () => {
     // Arrange: Setup variables here
     let expected = "9990";

     // Act: Call function here
     let result: string;
     result = add(99, "90");
 
     // Assert: Check results here
     expect(result).toBe(expected);
  })
})

describe('When calling the safeMultiply function', () => {

  it('should multiply two integers', () => {

    // Arrange: Setup variables here
     let expected = 100;

     // Act: Call function here
     let result: number;
     result = safeMultiply(10, 10);
 
     // Assert: Check results here
     expect(result).toBe(expected);

  })

  it('will throw an error when parameter a is bad', () => {
     // Arrange: Setup variables here
     let first = "abc";
     let second = 10;
 
     // Act: Call function here + Assert: Check results here
     // Hint: add a wrapper function
     let check = () => {
       let result = () => safeMultiply(first, second);
       return result;
     };

     // Assert
     expect(check()).toThrow();
  })
    
  it('will throw an error when parameter b is bad', () => {
    // Arrange: Setup variables here
    let first = "abc";
    let second = 10;

    // Act: Call function here
    let check = () => {
      let result = () => safeMultiply(first, second);
      return result;
    };
    // Assert: Check results here
    expect(check()).toThrow();
  });
})
