import { Injectable } from '@angular/core';
import { CompareResult } from '../enums/compare-result.enum';

@Injectable()
/**
 * Helps calculate participants rating using elo system
 */
export class RatingService {
  /**
   * Calculating elo rating delata
   * @param participant1rating
   * @param participant2rating
   * @param participant1result
   * @returns {any}
   */
  private getRatingDelta(participant1rating: number, participant2rating: number, participant1result: CompareResult) {
    const myChanceToWin = 1 / (1 + Math.pow(10, (participant2rating - participant1rating) / 400));
    return Math.round(32 * (participant1result - myChanceToWin));
  }

  /**
   * Calculating new elo rating
   * @param {number} participant1rating
   * @param {number} participant2rating
   * @param participant1result
   * @returns {any}
   */
  public getNewScore(participant1rating: number, participant2rating: number, participant1result) {
    return participant1rating + this.getRatingDelta(participant1rating, participant2rating, participant1result);
  }
}
