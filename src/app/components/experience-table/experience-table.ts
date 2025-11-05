import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-experience-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-table.html',
  styleUrls: ['./experience-table.css']
})
export class ExperienceTable {
  @Input() experiences: Experience[] = [];
  @Output() viewExperience = new EventEmitter<Experience>();
  @Output() deleteExperience = new EventEmitter<Experience>();

  onView(experience: Experience) {
    this.viewExperience.emit(experience);
  }

onDelete(experience: Experience) {
  this.deleteExperience.emit(experience); // لو اسم الفيلد _id
}

}
