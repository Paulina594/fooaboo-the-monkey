import { Injectable } from '@angular/core';
import { BACKGROUNDS, BackgroundType } from './backgroundsData';

@Injectable()
export class BackgroundService {
  private backgrounds: BackgroundType[] = BACKGROUNDS;

  private currentBackground: BackgroundType = this.backgrounds[0];

  getCurrentBackground() {
    return this.currentBackground;
  }

  setCurrentBackground(backgroundType: BackgroundType): void {
    this.currentBackground = backgroundType;
  }
}
