import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {BattleParticipantsInterface} from '../../../core/interfaces/battle-participants.interface';
import {BattleModel} from '../../../core/models/battle.model';
import {RatingService} from '../../../core/services/rating.service';
import {TransportService} from '../../../core/services/transport.service';
import {HelperService} from '../../../core/services/helper.service';
import {ParticipantModel} from '../../../core/models/participant.model';
import {CompareResult} from '../../../core/enums/compare-result.enum';

@Component({
  selector: 'compare-page',
  templateUrl: 'compare-page.component.html'
})
export class ComparePage implements OnInit {
  public participants$: BehaviorSubject<BattleParticipantsInterface> | null;
  public battles$: Subject<BattleModel>;
  public loading$: BehaviorSubject<boolean>;

  public constructor(public rating: RatingService,
                     public transport: TransportService,
                     public helper: HelperService) {
    this.battles$ = new Subject<BattleModel>();
    this.participants$ = new BehaviorSubject<BattleParticipantsInterface>(null);
    this.loading$ = new BehaviorSubject<boolean>(true);
  }

  public ngOnInit() {
    this.loading$.subscribe((loading: boolean) => {
      if (loading === false) {
        this.nextBattle();
      }
    });

    this.transport.getParticipants().subscribe((participants: ParticipantModel[]) => {
      if (participants.length !== 0) {
        this.loading$.next(false);
      }
    });

    this.battles$.subscribe((result: BattleModel) => {
      let participant1id: string,
          participant2id: string,
          participant1Rating: number,
          participant2Rating: number,
          participant1newRating: number,
          participant2newRating: number;

      participant1id = result.participants.participant1.id;
      participant2id = result.participants.participant2.id;
      participant1Rating = result.participants.participant1.score;
      participant2Rating = result.participants.participant2.score;
      // calculating new rating
      switch (result.participant1result) {
        case CompareResult.win:
          participant1newRating = this.rating.getNewScore(participant1Rating, participant2Rating, CompareResult.win);
          participant2newRating = this.rating.getNewScore(participant2Rating, participant1Rating, CompareResult.lose);
          break;
        case CompareResult.lose:
          participant1newRating = this.rating.getNewScore(participant1Rating, participant2Rating, CompareResult.lose);
          participant2newRating = this.rating.getNewScore(participant2Rating, participant1Rating, CompareResult.win);
          break;
        default:
          participant1newRating = participant1Rating;
          participant2newRating = participant2Rating;
          break;
      }
      // testing rating change
      // console.log(`1: ${participant1Rating} -> ${participant1newRating}`);
      // console.log(`2: ${participant2Rating} -> ${participant2newRating}`);
      this.transport.updateParticipantScore(participant1id, participant1newRating);
      this.transport.updateParticipantScore(participant2id, participant2newRating);
    });
  }

  /**
   * Doing battle after user selected a winner
   * @param participant1result
   */
  public battle(participant1result): void {
    const battleResult = new BattleModel(this.participants$.value, participant1result);
    this.battles$.next(battleResult);
    this.nextBattle();
  }

  public nextBattle(): void {
    const twoRandomNumbers = this.helper.getTwoRandomNumbers(this.transport.getParticipantsNumber().value);
    this.participants$.next({
      participant1: this.transport.getParticipants().value[twoRandomNumbers[0]],
      participant2: this.transport.getParticipants().value[twoRandomNumbers[1]],
    });
  }
}
