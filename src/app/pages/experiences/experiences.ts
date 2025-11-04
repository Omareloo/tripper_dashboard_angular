import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/experience';
import { ExperienceTable } from '../../components/experience-table/experience-table';
import { ExperienceModal } from '../../components/experience-modal/experience-modal';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, ExperienceTable, ExperienceModal],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css',
})
export class Experiences {
  experiences: Experience[] = [
    {
      id: '1',
      name: 'Desert Safari Adventure',
      description: 'A thrilling desert ride with camels and local food.',
      price: 120,
      images: ['https://via.placeholder.com/300x200'],
      dates: ['2025-12-01', '2025-12-15'],
      activities: [
        { title: 'Camel Ride' },
        { title: 'Dinner Under Stars' },
      ],
      address: { country: 'Egypt', city: 'Hurghada' },
      starRating: 4.8,
      hostName: 'Ahmed Mostafa',
      hostEmail: 'ahmed@example.com'
    },
    {
      id: '2',
      name: 'Mountain Hike Experience',
      description: 'Climb the beautiful mountains of Sinai.',
      price: 90,
      images: ['https://via.placeholder.com/300x200'],
      dates: ['2025-11-10'],
      activities: [
        { title: 'Hiking' },
        { title: 'Photography' },
      ],
      address: { country: 'Egypt', city: 'Sinai' },
      starRating: 4.6,
      hostName: 'Omar Hossam',
      hostEmail: 'omar@example.com'
    }
  ];

  selectedExperience: Experience | null = null;

  openExperienceDetails(exp: Experience) {
    this.selectedExperience = exp;
  }

  closeExperienceDetails() {
    this.selectedExperience = null;
  }

  deleteExperience(exp: Experience) {
    this.experiences = this.experiences.filter(e => e.id !== exp.id);
  }
}
