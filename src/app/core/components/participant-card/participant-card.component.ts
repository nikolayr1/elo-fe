import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParticipantModel} from '../../models/participant.model';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.sass']
})
export class ParticipantCardComponent implements OnInit {
  @Input() participant: ParticipantModel;
  @Input() showFullInfo: boolean;
  @Output() imageClickedEmitter = new EventEmitter();
  public showInfo: boolean;

  public ngOnInit(): void {
    // checking if card has parent directive to show it's info from the very beginning
    this.showFullInfo ? this.showInfo = true : this.showInfo = false;
  }

  /**
   * Toggling show info state
   */
  public toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }

  /**
   * Emitting click event to the parent component
   */
  public imageClicked(): void {
    this.imageClickedEmitter.emit();
  }
}
