import {Injectable} from '@angular/core';

@Injectable()
/**
 * Contains helper functions
 */
export class HelperService {
    /**
     * Generates two different random numbers
     * @param {number} maxNumber
     * @returns {number[]}
     */
    public getTwoRandomNumbers(maxNumber: number): number[] {
        let firstNumber: number;
        let secondNumber: number;
        if (maxNumber > 0) {
            firstNumber = this.getRandomNumber(maxNumber);
            secondNumber = this.getRandomNumber(maxNumber);
            while (secondNumber === firstNumber) {
                secondNumber = this.getRandomNumber(maxNumber);
            }
        } else {
            firstNumber = 0;
            secondNumber = 0;
        }
        return [firstNumber, secondNumber];
    }

    /**
     * Generating random number
     * @param {number} maxNumber
     * @returns {number}
     */
    public getRandomNumber(maxNumber: number): number {
        return Math.floor(Math.random() * maxNumber);
    }

    /**
     * Extracts participant data into non-typed-object
     * @returns {object}
     */
    public getData(object: any): any {
      const result: any = {};
      Object.keys(object).map(key => result[key] = object[key]);
      return result;
    }
}
