import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { ThemeColorComponent } from './theme-color/theme-color.component';
import { BackgroundChoiceComponent } from './background-choice/background-choice.component';

@NgModule({
  declarations: [SettingsPageComponent, ThemeColorComponent, BackgroundChoiceComponent],
  imports: [CommonModule],
})
export class SettingsModule {}
