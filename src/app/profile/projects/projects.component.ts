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
  animationState: 'left' | 'right' | '' = ''; 
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.projects = this.profileService.getProjects();
    this.animationState = 'left';
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length,
    };
  }

  pageChanged(event: number) {
    const oldPage = this.config.currentPage;
    this.config.currentPage = event;

    if (event > oldPage) {
      this.animationState = 'right';
    } else {
      this.animationState = 'left';
    }

    setTimeout(() => {
      this.animationState = ''; 
    }, 500);
  }
}
