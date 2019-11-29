import { BattleParticipantsInterface } from '../interfaces/battle-participants.interface';
import { CompareResult } from '../enums/compare-result.enum';

/**
 * Describes battle
 */
export class BattleModel {
  public time: Date;
  public participants: BattleParticipantsInterface;
  public participant1result: CompareResult;

  public constructor(participants: BattleParticipantsInterface, participant1result: CompareResult) {
    this.time = new Date();
    this.participants = participants;
    this.participant1result = participant1result;
  }
}
