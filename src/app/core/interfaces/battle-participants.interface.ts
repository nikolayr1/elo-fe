import {ParticipantAdvancedModel} from '../models/participant-advanced.model';

/**
 * Data format for the battle
 */
export interface BattleParticipantsInterface {
  participant1: ParticipantAdvancedModel;
  participant2: ParticipantAdvancedModel;
}
