import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantModel } from '../../models/participant.model';
import { TransportService } from '../../services/transport.service';

@Component({
  selector: 'app-participant-add',
  templateUrl: './participant-add.component.html',
  styleUrls: ['./participant-add.component.sass'],
})
export class ParticipantAddComponent implements OnInit {
  public participantAddForm: FormGroup;

  public constructor(private fb: FormBuilder,
                     private transport: TransportService) {
  }

  public ngOnInit() {
    this.participantAddForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      url: ['', Validators.required],
      photo: ['', Validators.required],
    });
  }

  /**
   * This happens when user submits form
   */
  public submit(): void {
    let photo: string,
      url: string,
      name: string,
      surname: string,
      newParticipant: ParticipantModel;
    if (this.participantAddForm.valid) {
      this.participantAddForm.disable();
      photo = this.participantAddForm.get('photo').value;
      url = this.participantAddForm.get('url').value;
      name = this.participantAddForm.get('name').value;
      surname = this.participantAddForm.get('surname').value;
      newParticipant = new ParticipantModel(photo, url, name, surname);
      this.addParticipant(newParticipant);
    }
  }

  /**
   * Trying to add new participant in the database using transport service
   * @param {ParticipantModel} participant
   */
  public addParticipant(participant: ParticipantModel): void {
    this.transport.addParticipant(participant)
      .then((data) => {
          this.participantAddForm.reset();
          this.participantAddForm.enable();
          console.log(data);
        }
      ).catch(() => {
      this.participantAddForm.enable();
    });
  }
}
