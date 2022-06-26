import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BackgroundService } from './background/background.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, HttpClientModule],
  exports: [MatIconModule],
  providers: [BackgroundService],
})
export class SharedModule {}
