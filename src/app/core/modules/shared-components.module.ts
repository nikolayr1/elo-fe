import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantCardComponent } from '../components/participant-card/participant-card.component';
import { ParticipantAddComponent } from '../components/participant-add/participant-add.component';
import { ReactiveFormsModule } from '@angular/forms';

const SHARED_COMPONENTS = [
  ParticipantCardComponent,
  ParticipantAddComponent,
];

/**
 * Include this module to use shared components
 */
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS,
})
export class SharedComponentsModule { }
