import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  animations: [
    trigger('projectSlider', [
      state('left', style({ transform: 'translateX(0)', opacity: 1 })),
      state('right', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('* => left', [
        style({ transform: 'translateX(-50%)', opacity: 0 }),
        animate('500ms ease-out')
      ]),
      transition('* => right', [
        style({ transform: 'translateX(50%)', opacity: 0 }),
        animate('500ms ease-out')
      ]),
      transition('left => void', [
        animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 50 }))
      ]),
      transition('right => void', [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)', opacity: 50 }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects: any = [];
  animationState: 'left' | 'right' | '' = ''; // Initial state, or use 'left' or 'right' if you want an initial slide
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.projects = this.profileService.getProjects();
    this.animationState = 'left';
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projects.length,
    };
  }

  pageChanged(event: number) {
    const oldPage = this.config.currentPage;
    this.config.currentPage = event;

    // Determine direction of slide based on page change
    if (event > oldPage) {
      this.animationState = 'right'; // Sliding in from right
    } else {
      this.animationState = 'left'; // Sliding in from left
    }

    // Reset the animation state after a short delay to trigger the animation again on next change
    // This is important because the state needs to change for the animation to re-trigger for the same direction
    setTimeout(() => {
      this.animationState = ''; // Reset state to allow next transition
    }, 500); // Match animation duration
  }
}
