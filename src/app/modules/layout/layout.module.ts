import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundComponent } from './background/background.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
