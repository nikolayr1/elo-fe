import {Component, OnInit} from '@angular/core';
import {OrderByInterface} from '../../../core/interfaces/order-by.interface';
import {BehaviorSubject} from 'rxjs';
import {ParticipantModel} from '../../../core/models/participant.model';
import {OrderBy} from '../../../core/enums/order-by-type.enum';
import {TransportService} from '../../../core/services/transport.service';

@Component({
  selector: 'page-rating',
  templateUrl: 'rating-page.component.html'
})
export class RatingPage implements OnInit {
  public TOP_TYPES: number[];
  public ORDER_TYPES: OrderByInterface[];
  public selectedTopType: number;
  public participants$: BehaviorSubject<ParticipantModel[]>;
  public showParticipantsInfo: boolean;
  private participantsNumber$: BehaviorSubject<number>;
  private participantsOrder$: BehaviorSubject<OrderBy>;

  public constructor(public transport: TransportService) {
    this.TOP_TYPES = [1, 3, 100, 0]; // 0 means 'all'
    this.ORDER_TYPES = [
      {
        name: 'Имя',
        value: OrderBy.name
      },
      {
        name: 'Фамилия',
        value: OrderBy.surname
      },
      {
        name: 'Рейтинг',
        value: OrderBy.score
      },
    ];
    this.selectedTopType = this.TOP_TYPES[0];
    this.showParticipantsInfo = true;
    this.participants$ = new BehaviorSubject<ParticipantModel[]>([]);
    this.participantsNumber$ = new BehaviorSubject<number>(this.selectedTopType);
    this.participantsOrder$ = new BehaviorSubject<OrderBy>(OrderBy.score);
  }

  public ngOnInit() {
    this.transport.queryParticipants(
        this.participantsNumber$.asObservable(),
        this.participantsOrder$.asObservable()
    ).subscribe(participants => {
      this.participants$.next(participants);
    });
  }

  public topLimitChanged(e: Event) {
    if (e.target['value']) {
      this.participantsNumber$.next(parseInt(e.target['value'], 10));
    }
  }

  public orderByChanged(e: Event) {
    if (e.target['value']) {
      this.participantsOrder$.next(e.target['value']);
    }
  }
}
