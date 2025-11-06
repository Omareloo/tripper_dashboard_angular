import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience';
import { ExperienceService } from '../../services/experiences';
import { CommonModule } from '@angular/common';
import { ExperienceModal } from '../../components/experience-modal/experience-modal';
import { ExperienceTable } from '../../components/experience-table/experience-table';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule,ExperienceModal,ExperienceTable],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  selectedExperience: Experience | null = null;
  loading = false;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
  let  data =  this.getExperiences();
  // console.log(data);
  }

  getExperiences() {
    this.experienceService.getAllExperiences().subscribe({
      next: (data) => (this.experiences = data),
      error: (err) => console.error('Error loading experiences:', err),
    });
  }
  openExperienceDetails(exp: Experience) {
    this.selectedExperience = exp;
  }

closeExperienceDetails() {
  this.selectedExperience = null;
}

deleteExperience(experience: any) {
if (!experience?._id) {
    console.error('Experience id is missing!', experience);
    return;
  }

  this.experienceService.deleteExperience(experience._id).subscribe({
    next: () => {
      console.log('Deleted successfully');
      this.getExperiences();
    },
    error: (err) => console.error('Error deleting experience: ', err)
  });
  
}

}
