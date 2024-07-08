/**
 * Add two numbers
 *
 * @param a The first number
 * @param b The second number
 * @returns The sum of a and b
 */
export function add(a: number, b: number): number {
    return a + b;
  }
  
  /**
   * Subtract two numbers
   *
   * @param a The first number
   * @param b The second number
   * @returns The difference of a and b
   */
  export function subtract(a: number, b: number): number {
    return a - b;
  }
  
  /**
   * Multiply two numbers
   *
   * @param a The first number
   * @param b The second number
   * @returns The product of a and b
   */
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  /**
   * Divide two numbers
   *
   * @param a The first number
   * @param b The second number
   * @returns The quotient of a and b
   * @throws Error if b is 0
   */
  export function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  