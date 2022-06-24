import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MonkeyComponent } from './monkey/monkey.component';
import { SpeakCloudComponent } from './speak-cloud/speak-cloud.component';

@NgModule({
  declarations: [HomePageComponent, MonkeyComponent, SpeakCloudComponent],
  imports: [CommonModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
