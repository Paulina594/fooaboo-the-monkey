import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../../../shared/background/background.service';
import { BackgroundType } from '../../../shared/background/backgroundsData';

@Component({
  selector: 'app-background-choice',
  templateUrl: './background-choice.component.html',
  styleUrls: ['./background-choice.component.scss'],
})
export class BackgroundChoiceComponent implements OnInit {
  public items: BackgroundType[];
  constructor(private backgroundsService: BackgroundService) {}

  ngOnInit(): void {
    this.items = this.backgroundsService.getBackgrounds();
  }
}
